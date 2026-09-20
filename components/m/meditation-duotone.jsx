import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyvy9kbny.css';
import '../../css/h/hwlo84b7e.css';
import '../../css/e/em2u9acce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyvy9kbny"/><path clip-rule="evenodd" class="hwlo84b7e"/><path class="em2u9acce"/></g>`,
		"fallback": "reicon:meditation-duotone",
	});
}

export default Component;
