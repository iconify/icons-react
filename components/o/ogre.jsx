import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6t6w1bib.css';
import '../../css/n/nw9pxhbpq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6t6w1bib"/><path class="nw9pxhbpq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ogre",
	});
}

export default Component;
