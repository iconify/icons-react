import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17ky5b_s.css';
import '../../css/c/c9hspu0yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v17ky5b_s"/><path class="c9hspu0yv"/></g>`,
		"fallback": "nrk:volume-1-expressive",
	});
}

export default Component;
