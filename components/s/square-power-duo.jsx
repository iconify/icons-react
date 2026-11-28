import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrcnysbjv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/b/bdr6scb9e.css';
import '../../css/h/hqfrkub7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrcnysbjv secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="bdr6scb9e"/><path class="hqfrkub7w"/></g>`,
		"fallback": "iconaut:square-power-duo",
	});
}

export default Component;
