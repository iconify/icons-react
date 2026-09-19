import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3fc8fpdi.css';
import '../../css/f/fnm8d3bcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m3fc8fpdi"/><path class="fnm8d3bcr"/></g>`,
		"fallback": "bi:reddit",
	});
}

export default Component;
