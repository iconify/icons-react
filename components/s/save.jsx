import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f00izgbny.css';
import '../../css/o/oclqsc5cj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f00izgbny"/><path class="oclqsc5cj"/></g>`,
		"fallback": "rivet-icons:save",
	});
}

export default Component;
