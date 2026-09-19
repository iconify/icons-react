import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pdhw08cew.css';
import '../../css/e/e0gyz35bk.css';
import '../../css/t/tc-tj3qvr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pdhw08cew"/><path class="e0gyz35bk"/><path class="tc-tj3qvr"/></g>`,
		"fallback": "glyphs:timer-1-duo",
	});
}

export default Component;
