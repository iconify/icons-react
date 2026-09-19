import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vu-hby3bm.css';
import '../../css/l/lyv_st-0c.css';
import '../../css/o/osry1lvwl.css';
import '../../css/k/kan9o3fem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vu-hby3bm"/><path clip-rule="evenodd" class="lyv_st-0c"/><path class="osry1lvwl"/><path clip-rule="evenodd" class="kan9o3fem"/></g>`,
		"fallback": "healthicons:officer2x-outline",
	});
}

export default Component;
