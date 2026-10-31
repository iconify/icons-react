import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rg9ttz14n.css';
import '../../css/e/ezg_nb0vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rg9ttz14n"/><path class="ezg_nb0vk"/></g>`,
		"fallback": "coolicons:podcast-bulk-round",
	});
}

export default Component;
