import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htgqrzeyb.css';
import '../../css/w/whwg07q6k.css';
import '../../css/q/q_bf21bmv.css';
import '../../css/q/qa6o82bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htgqrzeyb"/><path class="whwg07q6k"/><path class="q_bf21bmv"/><path class="qa6o82bki"/></g>`,
		"fallback": "lets-icons:trophy",
	});
}

export default Component;
