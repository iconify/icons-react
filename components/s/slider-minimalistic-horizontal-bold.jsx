import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rnoe4ebam.css';
import '../../css/f/fjonzf_2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rnoe4ebam"/><path clip-rule="evenodd" class="fjonzf_2u"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-bold",
	});
}

export default Component;
