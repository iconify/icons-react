import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wx9jfdcbr.css';
import '../../css/s/sos1_8pee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wx9jfdcbr"/><path clip-rule="evenodd" class="sos1_8pee"/></g>`,
		"fallback": "nrk:tv-dot-solid",
	});
}

export default Component;
