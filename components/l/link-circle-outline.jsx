import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qszyx2b8w.css';
import '../../css/s/spe1n8bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qszyx2b8w"/><path class="spe1n8bqi"/></g>`,
		"fallback": "solar:link-circle-outline",
	});
}

export default Component;
