import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yo9o33k3p.css';
import '../../css/q/qq3ivih_x.css';
import '../../css/u/usppm9ouw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yo9o33k3p"/><path clip-rule="evenodd" class="qq3ivih_x"/><path class="usppm9ouw"/></g>`,
		"fallback": "healthicons:spreadsheets",
	});
}

export default Component;
