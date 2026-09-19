import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_ke1bbey.css';
import '../../css/l/lyv_st-0c.css';
import '../../css/j/j53y1ybih.css';
import '../../css/u/ubczyjues.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_ke1bbey"/><path clip-rule="evenodd" class="lyv_st-0c"/><path class="j53y1ybih"/><path clip-rule="evenodd" class="ubczyjues"/></g>`,
		"fallback": "healthicons:security-worker2x-outline",
	});
}

export default Component;
