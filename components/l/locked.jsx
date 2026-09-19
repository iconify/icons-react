import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6zdg04ib.css';
import '../../css/m/mug_q2y2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6zdg04ib"/><path class="mug_q2y2i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:locked",
	});
}

export default Component;
