import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qd8zy4brq.css';
import '../../css/y/yhh8ypbhl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qd8zy4brq"/><path class="yhh8ypbhl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ping-pong",
	});
}

export default Component;
