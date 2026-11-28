import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hazsxsbyl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/j/j1h113bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hazsxsbyl secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="j1h113bom"/></g>`,
		"fallback": "iconaut:square-moon-duo",
	});
}

export default Component;
