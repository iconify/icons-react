import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc-l9fbmc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc-l9fbmc"/>`,
		"fallback": "temaki:telephone",
	});
}

export default Component;
