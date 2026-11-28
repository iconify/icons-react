import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7co7wtuf.css';
import '../../css/l/lta61dg9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7co7wtuf secondary"/><path class="lta61dg9b primary"/></g>`,
		"fallback": "iconaut:stool-duotone",
	});
}

export default Component;
