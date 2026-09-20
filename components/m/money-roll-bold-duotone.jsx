import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo9ighbht.css';
import '../../css/p/p4kgcfb0d.css';
import '../../css/u/uxcvcibju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jo9ighbht"/><path class="p4kgcfb0d"/><path class="uxcvcibju"/></g>`,
		"fallback": "solar:money-roll-bold-duotone",
	});
}

export default Component;
