import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzwcvm9zb.css';
import '../../css/d/db5xp1l8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vzwcvm9zb"/><path class="db5xp1l8d"/></g>`,
		"fallback": "solar:logout-2-bold",
	});
}

export default Component;
