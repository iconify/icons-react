import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swmrxccnh.css';
import '../../css/x/x0if-64yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="swmrxccnh"/><path clip-rule="evenodd" class="x0if-64yy"/></g>`,
		"fallback": "gg:square",
	});
}

export default Component;
