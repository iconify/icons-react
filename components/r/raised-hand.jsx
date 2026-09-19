import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q56o7qb4b.css';
import '../../css/p/pprwx_rly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q56o7qb4b"/><path class="pprwx_rly"/></g>`,
		"fallback": "fluent-emoji-high-contrast:raised-hand",
	});
}

export default Component;
