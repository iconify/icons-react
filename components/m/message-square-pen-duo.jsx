import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciyufj2nc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/o/ogg7s5bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciyufj2nc secondary"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="ogg7s5bgh"/></g>`,
		"fallback": "iconaut:message-square-pen-duo",
	});
}

export default Component;
