import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7nx-gbjx.css';
import '../../css/k/kvf8-pq8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7nx-gbjx"/><path class="kvf8-pq8g"/></g>`,
		"fallback": "solar:map-arrow-square-bold-duotone",
	});
}

export default Component;
