import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f56v0cc4m.css';
import '../../css/a/aj0uub86n.css';
import '../../css/p/plx_iu8-c.css';
import '../../css/r/rzk02_bbf.css';
import '../../css/c/cp62yzlvi.css';
import '../../css/f/f5j4_wiyh.css';
import '../../css/n/nxavd12ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f56v0cc4m wm-shadow"/><path class="aj0uub86n"/><path class="plx_iu8-c"/><path class="rzk02_bbf"/><path class="cp62yzlvi wm-s"/><path class="f5j4_wiyh"/><path class="nxavd12ey wm-s"/></g>`,
		"fallback": "withicons-retro:monitor-smartphone",
	});
}

export default Component;
