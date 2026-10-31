import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_lspy05z.css';
import '../../css/m/mmovkubhf.css';
import '../../css/f/f1rysccpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w_lspy05z wm-shadow"/><path class="mmovkubhf"/><path class="f1rysccpp"/></g>`,
		"fallback": "withicons-retro:stethoscope",
	});
}

export default Component;
