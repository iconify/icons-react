import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lrlan6lvw.css';
import '../../css/l/l_l4dubrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lrlan6lvw"/><path clip-rule="evenodd" class="l_l4dubrf"/></g>`,
		"fallback": "codicon:layout-sidebar-right-dock",
	});
}

export default Component;
