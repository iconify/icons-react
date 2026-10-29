import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hc3h7-3-t.css';
import '../../css/l/lf-b92d3v.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hc3h7-3-t"/><path class="lf-b92d3v wm-s"/><path class="wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/></g>`,
		"fallback": "withicons:mail-check-duo",
	});
}

export default Component;
