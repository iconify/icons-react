import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2es_7bef.css';
import '../../css/u/u74184bbs.css';
import '../../css/j/j2f-64b_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2es_7bef"/><path clip-rule="evenodd" class="u74184bbs"/><path class="j2f-64b_n"/></g>`,
		"fallback": "healthicons:ventilator-outline",
	});
}

export default Component;
