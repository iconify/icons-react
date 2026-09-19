import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dr4nqvw3k.css';
import '../../css/e/e7ha1tbiu.css';
import '../../css/a/akrz7xbnl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dr4nqvw3k"/><path class="e7ha1tbiu"/><path class="akrz7xbnl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-judge",
	});
}

export default Component;
