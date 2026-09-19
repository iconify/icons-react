import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwz9bc9bl.css';
import '../../css/u/u3xtssbxt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cwz9bc9bl"/><path class="u3xtssbxt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:keyboard",
	});
}

export default Component;
