import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvnd39bru.css';
import '../../css/t/tlqhll-to.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvnd39bru"/><path clip-rule="evenodd" class="tlqhll-to"/></g>`,
		"fallback": "healthicons:ui-zoom-out2x-outline",
	});
}

export default Component;
