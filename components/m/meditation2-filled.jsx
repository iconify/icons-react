import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyvy9kbny.css';
import '../../css/w/wscr3sbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyvy9kbny"/><path clip-rule="evenodd" class="wscr3sbqr"/></g>`,
		"fallback": "reicon:meditation2-filled",
	});
}

export default Component;
