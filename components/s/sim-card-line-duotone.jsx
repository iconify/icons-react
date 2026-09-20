import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/haij8g8ug.css';
import '../../css/a/admj65bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="haij8g8ug"/><path class="admj65bfr"/></g>`,
		"fallback": "solar:sim-card-line-duotone",
	});
}

export default Component;
