import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8-uq6b_e.css';
import '../../css/e/e17hls0jt.css';
import '../../css/y/yrx2zbf-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8-uq6b_e"/><path class="e17hls0jt"/><path class="yrx2zbf-s"/></g>`,
		"fallback": "solar:pen-new-round-bold",
	});
}

export default Component;
