import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4uul4lk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4uul4lk"/>`,
		"fallback": "temaki:tennis",
	});
}

export default Component;
