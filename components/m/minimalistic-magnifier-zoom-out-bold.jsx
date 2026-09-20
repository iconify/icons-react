import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4ltf1b1v.css';
import '../../css/n/nokwl-bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4ltf1b1v"/><path clip-rule="evenodd" class="nokwl-bze"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-out-bold",
	});
}

export default Component;
