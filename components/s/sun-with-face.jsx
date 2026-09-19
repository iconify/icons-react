import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je95qppjr.css';
import '../../css/m/m0d72jbgs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="je95qppjr"/><path class="m0d72jbgs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sun-with-face",
	});
}

export default Component;
