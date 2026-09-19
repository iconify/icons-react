import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ei6g13b_j.css';
import '../../css/e/eqe-adctw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ei6g13b_j"/><path class="eqe-adctw"/></g>`,
		"fallback": "glyphs:pencil-bold",
	});
}

export default Component;
