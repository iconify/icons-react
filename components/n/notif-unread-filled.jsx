import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjluq9mzh.css';
import '../../css/k/kd5roj08b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tjluq9mzh"/><path class="kd5roj08b"/></g>`,
		"fallback": "reicon:notif-unread-filled",
	});
}

export default Component;
