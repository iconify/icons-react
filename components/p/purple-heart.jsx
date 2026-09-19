import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q3r2y0uuq.css';
import '../../css/n/nfen2qbyk.css';
import '../../css/m/mha4p6bfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q3r2y0uuq"/><path class="nfen2qbyk"/><ellipse transform="rotate(30 23.477 12.594)" class="mha4p6bfh"/></g>`,
		"fallback": "fluent-emoji-flat:purple-heart",
	});
}

export default Component;
