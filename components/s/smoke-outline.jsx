import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9_pyx3kk.css';
import '../../css/x/xtus6ld-z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x9_pyx3kk"/><path class="xtus6ld-z"/></g>`,
		"fallback": "glyphs:smoke-outline",
	});
}

export default Component;
