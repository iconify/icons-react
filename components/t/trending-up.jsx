import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6cipfa6g.css';
import '../../css/v/v-dmhccwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t6cipfa6g"/><path class="v-dmhccwr"/></g>`,
		"fallback": "withicons-retro:trending-up",
	});
}

export default Component;
