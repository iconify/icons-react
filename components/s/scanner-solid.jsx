import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3ev-7phm.css';
import '../../css/p/p344ki2cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3ev-7phm"/><path class="p344ki2cx"/></g>`,
		"fallback": "iconaut:scanner-solid",
	});
}

export default Component;
