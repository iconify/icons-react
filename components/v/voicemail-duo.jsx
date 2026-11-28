import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns8e344ry.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szn6eo7_q.css';
import '../../css/g/gg1-q2dfk.css';
import '../../css/t/t-dm3oq4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns8e344ry secondary"/><g class="dt0cm9dhy primary"><path class="szn6eo7_q"/><path class="gg1-q2dfk"/><path class="t-dm3oq4k"/></g>`,
		"fallback": "iconaut:voicemail-duo",
	});
}

export default Component;
