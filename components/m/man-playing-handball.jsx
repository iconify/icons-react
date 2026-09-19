import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_8l2sbgi.css';
import '../../css/h/h50xhsmuu.css';
import '../../css/m/mi34npduq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_8l2sbgi"/><path class="h50xhsmuu"/><path class="mi34npduq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-playing-handball",
	});
}

export default Component;
