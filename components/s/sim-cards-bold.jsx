import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rob-vt9mr.css';
import '../../css/p/p6ex2gb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rob-vt9mr"/><path clip-rule="evenodd" class="p6ex2gb_i"/></g>`,
		"fallback": "solar:sim-cards-bold",
	});
}

export default Component;
