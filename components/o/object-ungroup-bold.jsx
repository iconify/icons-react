import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pa4wh9bbv.css';
import '../../css/e/e_9uubc-k.css';
import '../../css/y/yb0r1ubbb.css';
import '../../css/s/s2zndmz4t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pa4wh9bbv"/><path class="e_9uubc-k"/><path class="yb0r1ubbb"/><path class="s2zndmz4t"/></g>`,
		"fallback": "glyphs:object-ungroup-bold",
	});
}

export default Component;
