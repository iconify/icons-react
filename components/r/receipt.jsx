import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7tpmcqdm.css';
import '../../css/j/j6xx8qkth.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y7tpmcqdm"/><path class="j6xx8qkth"/></g>`,
		"fallback": "fluent-emoji-high-contrast:receipt",
	});
}

export default Component;
