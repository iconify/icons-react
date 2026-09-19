import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pg80exb6e.css';
import '../../css/w/w7-178bnk.css';
import '../../css/k/k2-hmwbsv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pg80exb6e"/><path class="w7-178bnk"/><path class="k2-hmwbsv"/></g>`,
		"fallback": "glyphs:layer-plus-bold",
	});
}

export default Component;
