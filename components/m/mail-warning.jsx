import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/q/qzc_kdb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="qzc_kdb0n wm-s"/></g>`,
		"fallback": "withicons:mail-warning",
	});
}

export default Component;
