import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljrp_rbee.css';
import '../../css/c/ck6k_wb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljrp_rbee"/><path clip-rule="evenodd" class="ck6k_wb-p"/></g>`,
		"fallback": "reicon:text-input-focus-filled",
	});
}

export default Component;
