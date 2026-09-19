import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps5o6mbcc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps5o6mbcc"/>`,
		"fallback": "fa7-brands:joget",
	});
}

export default Component;
