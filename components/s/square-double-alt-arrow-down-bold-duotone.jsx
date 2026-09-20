import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62ongbbh.css';
import '../../css/c/c0glxfolk.css';
import '../../css/x/xwbhyn8-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w62ongbbh"/><path class="c0glxfolk"/><path class="xwbhyn8-k"/></g>`,
		"fallback": "solar:square-double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
