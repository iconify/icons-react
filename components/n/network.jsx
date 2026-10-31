import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yk8ykmbaw.css';
import '../../css/g/gnqk5acuv.css';
import '../../css/o/o8g2dtbln.css';
import '../../css/o/o1sgbof6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yk8ykmbaw"/><path class="gnqk5acuv"/><path class="o8g2dtbln"/><path class="o1sgbof6a"/></g>`,
		"fallback": "withicons-retro:network",
	});
}

export default Component;
