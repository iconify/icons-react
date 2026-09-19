import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9-9k66xc.css';
import '../../css/i/i1y60ebvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9-9k66xc"/><path class="i1y60ebvu"/></g>`,
		"fallback": "glyphs:math-outline",
	});
}

export default Component;
