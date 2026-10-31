import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/upqvlijvi.css';
import '../../css/e/esgjdlmqa.css';
import '../../css/i/imn_1acgr.css';
import '../../css/a/a_-zzqb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="upqvlijvi wm-shadow"/><path class="esgjdlmqa"/><path class="imn_1acgr"/><path class="a_-zzqb0l"/></g>`,
		"fallback": "withicons-retro:scissors",
	});
}

export default Component;
