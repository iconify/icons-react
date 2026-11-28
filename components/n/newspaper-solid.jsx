import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sr7vd1btm.css';
import '../../css/c/ct9p84b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sr7vd1btm"/><path class="ct9p84b_l"/></g>`,
		"fallback": "iconaut:newspaper-solid",
	});
}

export default Component;
