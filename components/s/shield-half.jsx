import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dv4zy6bcc.css';
import '../../css/w/wmcvuk6qi.css';
import '../../css/b/bz9kb_byf.css';
import '../../css/v/v1rn-v3ue.css';
import '../../css/o/o9pue_v4x.css';
import '../../css/w/w6jkyfbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dv4zy6bcc wm-shadow"/><path class="wmcvuk6qi"/><path class="bz9kb_byf"/><path class="v1rn-v3ue"/><path class="o9pue_v4x"/><path class="w6jkyfbpg"/></g>`,
		"fallback": "withicons-retro:shield-half",
	});
}

export default Component;
