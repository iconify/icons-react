import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4k3tdbzo.css';
import '../../css/m/mojt_jbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g4k3tdbzo"/><path class="mojt_jbvo"/></g>`,
		"fallback": "iconaut:monitor-up-solid",
	});
}

export default Component;
