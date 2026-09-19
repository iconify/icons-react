import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u99lp1b_s.css';
import '../../css/l/lbb-5lblm.css';
import '../../css/i/iuxtdgbnr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u99lp1b_s"/><path class="lbb-5lblm"/><path clip-rule="evenodd" class="iuxtdgbnr"/></g>`,
		"fallback": "healthicons:measles2x-outline",
	});
}

export default Component;
