import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/o/o_0l1hoku.css';
import '../../css/l/lpx6j3cwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path clip-rule="evenodd" class="o_0l1hoku"/><path class="lpx6j3cwi"/></g>`,
		"fallback": "reicon:user-check2-filled",
	});
}

export default Component;
