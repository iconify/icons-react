import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pojhp1bzu.css';
import '../../css/l/l_k3x8bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pojhp1bzu"/><path class="l_k3x8bzp"/></g>`,
		"fallback": "coolicons:pin-bulk-round",
	});
}

export default Component;
