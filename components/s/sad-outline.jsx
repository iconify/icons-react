import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb5ffvplm.css';
import '../../css/u/u99lp1b_s.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wb5ffvplm"/><path clip-rule="evenodd" class="u99lp1b_s"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:sad-outline",
	});
}

export default Component;
