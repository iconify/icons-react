import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrp8owbwe.css';
import '../../css/d/dgp6cjnjf.css';
import '../../css/m/mvz31c87g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yrp8owbwe"/><path class="dgp6cjnjf"/><path class="mvz31c87g"/></g>`,
		"fallback": "glyphs:snow-bold",
	});
}

export default Component;
