import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sl7zu_bue.css';
import '../../css/d/d-4y_cbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sl7zu_bue"/><path class="d-4y_cbnr"/></g>`,
		"fallback": "withicons-retro:split",
	});
}

export default Component;
