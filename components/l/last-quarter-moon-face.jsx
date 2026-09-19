import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um6l6i2sq.css';
import '../../css/a/aqpm5ccnz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um6l6i2sq"/><path class="aqpm5ccnz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:last-quarter-moon-face",
	});
}

export default Component;
