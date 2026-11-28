import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fmf1e7bgx.css';
import '../../css/m/mojt_jbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fmf1e7bgx"/><path class="mojt_jbvo"/></g>`,
		"fallback": "iconaut:monitor-pause-solid",
	});
}

export default Component;
