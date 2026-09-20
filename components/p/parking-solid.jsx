import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgce1302x.css';
import '../../css/u/u8z3gqb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgce1302x"/><path class="u8z3gqb6q"/></g>`,
		"fallback": "mynaui:parking-solid",
	});
}

export default Component;
