import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lv4ij4qjj.css';
import '../../css/q/qkeklebii.css';
import '../../css/h/hvzdssbyh.css';
import '../../css/o/olj8mto2b.css';
import '../../css/g/g2pu41m2i.css';
import '../../css/v/vbsvkz40u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lv4ij4qjj wm-shadow"/><path class="qkeklebii"/><path class="hvzdssbyh"/><path class="olj8mto2b"/><path class="g2pu41m2i"/><path class="vbsvkz40u"/></g>`,
		"fallback": "withicons-retro:teddy-bear",
	});
}

export default Component;
