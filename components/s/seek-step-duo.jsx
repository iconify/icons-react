import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0lim0bbh.css';
import '../../css/x/x55fmriki.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0lim0bbh"/><path class="x55fmriki"/></g>`,
		"fallback": "glyphs:seek-step-duo",
	});
}

export default Component;
