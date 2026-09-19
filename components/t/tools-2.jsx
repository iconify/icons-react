import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix0gdjonx.css';
import '../../css/c/cpr0lubxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ix0gdjonx"/><path class="cpr0lubxs"/></g>`,
		"fallback": "et:tools-2",
	});
}

export default Component;
