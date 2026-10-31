import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ksv5bzb6u.css';
import '../../css/f/ftev9lnsg.css';
import '../../css/i/ipp7ttbqy.css';
import '../../css/o/oxpmg-bgw.css';
import '../../css/a/ax_e8ebcc.css';
import '../../css/p/p2500cbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ksv5bzb6u wm-shadow"/><path class="ftev9lnsg"/><path class="ipp7ttbqy"/><path class="oxpmg-bgw"/><path class="ax_e8ebcc"/><path class="p2500cbvo"/></g>`,
		"fallback": "withicons-retro:skull",
	});
}

export default Component;
