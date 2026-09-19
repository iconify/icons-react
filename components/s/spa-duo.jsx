import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug5jgqb6q.css';
import '../../css/r/r1t8jr54z.css';
import '../../css/j/jncdp9blo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug5jgqb6q"/><path class="r1t8jr54z"/><path class="jncdp9blo"/></g>`,
		"fallback": "glyphs:spa-duo",
	});
}

export default Component;
