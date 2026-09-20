import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxzy99kos.css';
import '../../css/y/y0orqe5il.css';
import '../../css/a/a218ox87q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxzy99kos"/><path class="y0orqe5il"/><path class="a218ox87q"/></g>`,
		"fallback": "solar:phone-calling-bold",
	});
}

export default Component;
