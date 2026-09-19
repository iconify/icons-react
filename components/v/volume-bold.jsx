import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igis_k17y.css';
import '../../css/r/rw2f_pddh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="igis_k17y"/><path class="rw2f_pddh"/></g>`,
		"fallback": "glyphs:volume-bold",
	});
}

export default Component;
