import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vt76habzb.css';
import '../../css/t/tfz8s6goq.css';
import '../../css/u/u2zsd7khw.css';
import '../../css/n/n1kmjebwt.css';
import '../../css/s/shj5ccceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vt76habzb wm-shadow"/><path class="tfz8s6goq"/><path class="u2zsd7khw"/><path class="n1kmjebwt"/><path class="shj5ccceq"/></g>`,
		"fallback": "withicons-retro:tennis",
	});
}

export default Component;
