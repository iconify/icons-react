import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nstqkuwkl.css';
import '../../css/v/vzlc76b1w.css';
import '../../css/j/j0lrf0bvw.css';
import '../../css/y/y5ojkzbkl.css';
import '../../css/c/c51t0pb6g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nstqkuwkl"/><path class="vzlc76b1w"/><path class="j0lrf0bvw"/><path clip-rule="evenodd" class="y5ojkzbkl"/><path class="c51t0pb6g"/></g>`,
		"fallback": "glyphs-poly:landmark",
	});
}

export default Component;
