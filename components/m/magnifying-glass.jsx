import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2qp3l3el.css';
import '../../css/s/sggnp3bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2qp3l3el"/><path clip-rule="evenodd" class="sggnp3bge"/></g>`,
		"fallback": "nrk:magnifying-glass",
	});
}

export default Component;
