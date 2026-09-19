import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2y1i9bco.css';
import '../../css/a/a6flmibnc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2y1i9bco"/><path class="a6flmibnc"/></g>`,
		"fallback": "glyphs:leaf-1-duo",
	});
}

export default Component;
