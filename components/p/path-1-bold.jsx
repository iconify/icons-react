import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_bhcb3h.css';
import '../../css/y/yn9mccbbf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij_bhcb3h"/><path class="yn9mccbbf"/></g>`,
		"fallback": "glyphs:path-1-bold",
	});
}

export default Component;
