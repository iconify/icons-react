import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q0d403bvx.css';
import '../../css/j/j0phbobiu.css';
import '../../css/p/pfb2ouljy.css';
import '../../css/w/wzwimxbdj.css';
import '../../css/h/hq5jsrm0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q0d403bvx wm-shadow"/><path class="j0phbobiu"/><path class="pfb2ouljy"/><path class="wzwimxbdj"/><path class="hq5jsrm0o"/></g>`,
		"fallback": "withicons-retro:send-horizontal",
	});
}

export default Component;
