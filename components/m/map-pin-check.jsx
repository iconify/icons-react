import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t1y-cbbzh.css';
import '../../css/r/rjg13i08f.css';
import '../../css/p/ptssi9bmh.css';
import '../../css/q/qqrg_y-jo.css';
import '../../css/v/v189pn1ui.css';
import '../../css/k/ksmoel62g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t1y-cbbzh wm-shadow"/><path class="rjg13i08f"/><path class="ptssi9bmh"/><path class="qqrg_y-jo"/><path class="v189pn1ui"/><path class="ksmoel62g"/></g>`,
		"fallback": "withicons-retro:map-pin-check",
	});
}

export default Component;
