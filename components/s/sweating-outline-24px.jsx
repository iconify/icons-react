import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyvy9kbny.css';
import '../../css/x/x4u8em_dw.css';
import '../../css/y/y612qh1_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyvy9kbny"/><path clip-rule="evenodd" class="x4u8em_dw"/><path class="y612qh1_g"/></g>`,
		"fallback": "healthicons:sweating-outline-24px",
	});
}

export default Component;
