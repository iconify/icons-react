import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dedubibkx.css';
import '../../css/k/k4s9e7b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dedubibkx"/><path class="k4s9e7b3d"/></g>`,
		"fallback": "solar:mirror-right-bold",
	});
}

export default Component;
