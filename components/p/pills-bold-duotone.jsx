import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7s-xyb_u.css';
import '../../css/r/rhalxh-xw.css';
import '../../css/v/vvnhdab1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7s-xyb_u"/><path class="rhalxh-xw"/><path class="vvnhdab1s"/></g>`,
		"fallback": "solar:pills-bold-duotone",
	});
}

export default Component;
