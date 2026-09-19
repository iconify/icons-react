import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_jzgebps.css';
import '../../css/x/xg5z-4bmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_jzgebps"/><path clip-rule="evenodd" class="xg5z-4bmv"/></g>`,
		"fallback": "healthicons:market-stall-outline",
	});
}

export default Component;
