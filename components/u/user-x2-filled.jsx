import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/lpx6j3cwi.css';
import '../../css/b/b30alwicb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path class="lpx6j3cwi"/><path clip-rule="evenodd" class="b30alwicb"/></g>`,
		"fallback": "reicon:user-x2-filled",
	});
}

export default Component;
