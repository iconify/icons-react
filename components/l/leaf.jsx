import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fhgumrq_o.css';
import '../../css/t/t8xmu-wgf.css';
import '../../css/g/gzt3b2bzo.css';
import '../../css/g/gfnr4dguk.css';
import '../../css/f/fdj9s690k.css';
import '../../css/s/s11tbibfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fhgumrq_o wm-shadow"/><path class="t8xmu-wgf"/><path class="gzt3b2bzo"/><path class="gfnr4dguk"/><path class="fdj9s690k"/><path class="s11tbibfe"/></g>`,
		"fallback": "withicons-retro:leaf",
	});
}

export default Component;
