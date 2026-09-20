import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1q90y5yh.css';
import '../../css/h/h-3hjpaom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v1q90y5yh"/><path class="h-3hjpaom"/></g>`,
		"fallback": "solar:play-bold-duotone",
	});
}

export default Component;
