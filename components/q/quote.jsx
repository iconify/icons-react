import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n2hkj17up.css';
import '../../css/c/cm6ugp8yx.css';
import '../../css/e/epvbi4knj.css';
import '../../css/b/bz1sxkvwm.css';
import '../../css/k/ks3ldkbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n2hkj17up wm-shadow"/><path class="cm6ugp8yx"/><path class="epvbi4knj"/><path class="bz1sxkvwm"/><path class="ks3ldkbbc"/></g>`,
		"fallback": "withicons-retro:quote",
	});
}

export default Component;
