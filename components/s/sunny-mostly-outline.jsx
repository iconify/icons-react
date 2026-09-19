import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucb4dmuog.css';
import '../../css/a/aotmqybhl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ucb4dmuog"/><path class="aotmqybhl"/></g>`,
		"fallback": "glyphs:sunny-mostly-outline",
	});
}

export default Component;
