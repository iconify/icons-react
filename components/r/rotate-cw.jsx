import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/npwu61bzm.css';
import '../../css/s/ssavqjv_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="npwu61bzm"/><path class="ssavqjv_m"/></g>`,
		"fallback": "withicons-retro:rotate-cw",
	});
}

export default Component;
