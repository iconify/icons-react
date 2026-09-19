import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_7-lqjyf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_7-lqjyf"/>`,
		"fallback": "famicons:pint-outline",
	});
}

export default Component;
