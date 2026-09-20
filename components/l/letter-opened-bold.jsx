import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6zgmlb8r.css';
import '../../css/t/t-lihbtmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6zgmlb8r"/><path clip-rule="evenodd" class="t-lihbtmh"/></g>`,
		"fallback": "solar:letter-opened-bold",
	});
}

export default Component;
