import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cu2l68bwm.css';
import '../../css/p/p6titwq1k.css';
import '../../css/n/npnkpyb1l.css';
import '../../css/m/m6gksbcfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cu2l68bwm"/><path class="p6titwq1k"/><path class="npnkpyb1l"/><path class="m6gksbcfm"/></g>`,
		"fallback": "iconaut:sun-rain",
	});
}

export default Component;
