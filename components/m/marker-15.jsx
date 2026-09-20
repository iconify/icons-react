import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqkcty9kc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqkcty9kc"/>`,
		"fallback": "maki:marker-15",
	});
}

export default Component;
