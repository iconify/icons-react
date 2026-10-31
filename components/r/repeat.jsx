import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/og-bpbczz.css';
import '../../css/w/w_4e5kbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="og-bpbczz"/><path class="w_4e5kbyl"/></g>`,
		"fallback": "withicons-retro:repeat",
	});
}

export default Component;
