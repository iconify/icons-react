import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qj6wpr0fd.css';
import '../../css/s/s50rp_szt.css';
import '../../css/o/o75tdrb0l.css';
import '../../css/o/oedccebyj.css';
import '../../css/z/z8l_tubbs.css';
import '../../css/a/a3_8mh8op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qj6wpr0fd wm-shadow"/><path class="s50rp_szt"/><path class="o75tdrb0l"/><path class="oedccebyj"/><path class="z8l_tubbs"/><path class="a3_8mh8op"/></g>`,
		"fallback": "withicons-retro:layout-dashboard",
	});
}

export default Component;
