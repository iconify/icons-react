import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5lj33z7x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ay7v23jbz.css';
import '../../css/l/ltw4lrqoo.css';
import '../../css/a/anx3l54he.css';
import '../../css/a/a6to1-bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary t5lj33z7x"/><g class="dt0cm9dhy primary"><path class="ay7v23jbz"/><path class="ltw4lrqoo"/><path class="anx3l54he"/><path class="a6to1-bzk"/></g>`,
		"fallback": "iconaut:scanner-duo",
	});
}

export default Component;
