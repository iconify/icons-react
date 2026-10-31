import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mpj-ogzjy.css';
import '../../css/g/g_aiocoel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mpj-ogzjy"/><path class="g_aiocoel"/></g>`,
		"fallback": "withicons-retro:maximize-2",
	});
}

export default Component;
