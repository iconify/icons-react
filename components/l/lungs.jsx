import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntgb1z6op.css';
import '../../css/c/c1j-6_1tm.css';
import '../../css/j/j2dz0wb2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ntgb1z6op"/><path clip-rule="evenodd" class="c1j-6_1tm"/><path clip-rule="evenodd" class="j2dz0wb2h"/></g>`,
		"fallback": "healthicons:lungs",
	});
}

export default Component;
