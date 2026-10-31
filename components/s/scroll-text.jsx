import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/htwoedzjn.css';
import '../../css/y/y2g5vy_mj.css';
import '../../css/b/brtc64xdu.css';
import '../../css/l/ls-rp4ruk.css';
import '../../css/j/j1kc27udl.css';
import '../../css/n/n1z0xyqgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="htwoedzjn wm-shadow"/><path class="y2g5vy_mj"/><path class="brtc64xdu"/><path class="ls-rp4ruk"/><path class="j1kc27udl"/><path class="n1z0xyqgm"/></g>`,
		"fallback": "withicons-retro:scroll-text",
	});
}

export default Component;
