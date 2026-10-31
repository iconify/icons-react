import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz0axgs-q.css';
import '../../css/y/ygiddimvq.css';
import '../../css/x/xqh697bhx.css';
import '../../css/u/u2y_uujnq.css';
import '../../css/w/wxgmti50c.css';
import '../../css/l/lyowjoykr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wz0axgs-q"/><path class="ygiddimvq"/><path class="xqh697bhx"/><path class="u2y_uujnq"/><path class="wxgmti50c"/><path class="lyowjoykr"/></g>`,
		"fallback": "withicons-retro:life-buoy",
	});
}

export default Component;
