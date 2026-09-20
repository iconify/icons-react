import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dal5zmbne.css';
import '../../css/m/ms84uxvjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dal5zmbne"/><path clip-rule="evenodd" class="ms84uxvjw"/></g>`,
		"fallback": "solar:star-fall-minimalistic-bold-duotone",
	});
}

export default Component;
