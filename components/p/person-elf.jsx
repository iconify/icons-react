import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dffa-2-8j.css';
import '../../css/w/wd7_dfbtp.css';
import '../../css/k/kv9wu-bev.css';
import '../../css/y/yh8mj6bny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dffa-2-8j"/><path class="wd7_dfbtp"/><path class="kv9wu-bev"/><path class="yh8mj6bny"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-elf",
	});
}

export default Component;
