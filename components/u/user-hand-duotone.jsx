import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo0pu3bhk.css';
import '../../css/i/io57_vhgi.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wo0pu3bhk"/><path class="io57_vhgi"/><circle class="dtl23o_xq"/></g>`,
		"fallback": "reicon:user-hand-duotone",
	});
}

export default Component;
