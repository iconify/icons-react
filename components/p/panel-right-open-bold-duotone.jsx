import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_my74bgw.css';
import '../../css/f/ff9cxub2q.css';
import '../../css/r/r1h_sybmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_my74bgw"/><path class="ff9cxub2q"/><path class="r1h_sybmr"/></g>`,
		"fallback": "solar:panel-right-open-bold-duotone",
	});
}

export default Component;
