import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swmj859dg.css';
import '../../css/c/cmyxzeb6m.css';
import '../../css/f/fgizidusj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="swmj859dg"/><path class="cmyxzeb6m"/><path class="fgizidusj"/></g>`,
		"fallback": "solar:reorder-2-bold",
	});
}

export default Component;
