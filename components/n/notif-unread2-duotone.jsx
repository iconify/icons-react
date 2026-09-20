import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx_rd-2af.css';
import '../../css/t/t3m8fsrqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rx_rd-2af"/><path class="t3m8fsrqo"/></g>`,
		"fallback": "reicon:notif-unread2-duotone",
	});
}

export default Component;
