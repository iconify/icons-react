import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tg1onllgj.css';
import '../../css/j/j7hzqfbli.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tg1onllgj"/><path class="j7hzqfbli"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:receive-square-outline",
	});
}

export default Component;
