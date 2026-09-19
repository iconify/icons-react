import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acsrd_b0q.css';
import '../../css/e/e0u7ijb0l.css';
import '../../css/n/nj7wxyulw.css';
import '../../css/e/euq9bux1b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="acsrd_b0q"/><path class="e0u7ijb0l"/><path class="nj7wxyulw"/><path class="euq9bux1b"/></g>`,
		"fallback": "glyphs:users-1-duo",
	});
}

export default Component;
