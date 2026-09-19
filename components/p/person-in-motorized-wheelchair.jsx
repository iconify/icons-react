import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1rgijbfz.css';
import '../../css/o/o36-3ub6f.css';
import '../../css/d/d_x6embrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1rgijbfz"/><path class="o36-3ub6f"/><path class="d_x6embrx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-motorized-wheelchair",
	});
}

export default Component;
