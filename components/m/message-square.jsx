import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/s/siv_bsrfa.css';
import '../../css/g/gwp1f4bzd.css';
import '../../css/o/o2bj_fb1i.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/n/nbi4alboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="siv_bsrfa"/><path class="gwp1f4bzd"/><path class="o2bj_fb1i"/><path class="cp-ektmmr"/><path class="nbi4alboy"/></g>`,
		"fallback": "withicons-retro:message-square",
	});
}

export default Component;
