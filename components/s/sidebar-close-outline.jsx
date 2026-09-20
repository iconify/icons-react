import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znq7_jbyl.css';
import '../../css/t/t88wgqbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znq7_jbyl"/><path clip-rule="evenodd" class="t88wgqbrv"/></g>`,
		"fallback": "solar:sidebar-close-outline",
	});
}

export default Component;
