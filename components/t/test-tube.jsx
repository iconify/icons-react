import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cfmykrbut.css';
import '../../css/f/fjsedw-yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cfmykrbut"/><path class="fjsedw-yo wm-a"/></g>`,
		"fallback": "withicons:test-tube",
	});
}

export default Component;
