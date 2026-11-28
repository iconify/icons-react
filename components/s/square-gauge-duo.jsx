import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrcnysbjv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/a/alfii4bir.css';
import '../../css/c/c0qm1sbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrcnysbjv secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="alfii4bir"/><path class="c0qm1sbgz"/></g>`,
		"fallback": "iconaut:square-gauge-duo",
	});
}

export default Component;
