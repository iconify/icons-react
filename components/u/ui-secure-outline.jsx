import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smuptmriv.css';
import '../../css/o/ozg1gctei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smuptmriv"/><path clip-rule="evenodd" class="ozg1gctei"/></g>`,
		"fallback": "healthicons:ui-secure-outline",
	});
}

export default Component;
