import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0lck3ovg.css';
import '../../css/k/ktkrk1qky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0lck3ovg"/><path clip-rule="evenodd" class="ktkrk1qky"/></g>`,
		"fallback": "solar:panorama-bold",
	});
}

export default Component;
