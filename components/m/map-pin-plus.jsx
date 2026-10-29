import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/n/nl0gnobci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v2ukonb-w"/><path class="nl0gnobci wm-s"/></g>`,
		"fallback": "withicons:map-pin-plus",
	});
}

export default Component;
