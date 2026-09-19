import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6acczb2b.css';
import '../../css/y/ylngnkt0m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6acczb2b"/><path class="ylngnkt0m"/></g>`,
		"fallback": "fluent-emoji-high-contrast:microphone",
	});
}

export default Component;
