import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/azsk-bozs.css';
import '../../css/e/euhibccro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="azsk-bozs"/><path class="euhibccro"/></g>`,
		"fallback": "solar:transfer-vertical-bold",
	});
}

export default Component;
