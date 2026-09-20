import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kd5roj08b.css';
import '../../css/s/s7qf1rb3v.css';
import '../../css/e/e0sr_k7vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kd5roj08b"/><path clip-rule="evenodd" class="s7qf1rb3v"/><path clip-rule="evenodd" class="e0sr_k7vd"/></g>`,
		"fallback": "reicon:notif-unread2-filled",
	});
}

export default Component;
