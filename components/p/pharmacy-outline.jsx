import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfdt94yol.css';
import '../../css/u/u-lavubzh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vfdt94yol"/><path class="u-lavubzh"/></g>`,
		"fallback": "healthicons:pharmacy-outline",
	});
}

export default Component;
