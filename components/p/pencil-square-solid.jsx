import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvx0k686g.css';
import '../../css/o/odn1l2bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvx0k686g"/><path class="odn1l2bjk"/></g>`,
		"fallback": "heroicons:pencil-square-solid",
	});
}

export default Component;
