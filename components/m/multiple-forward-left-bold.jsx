import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ai95kp4dp.css';
import '../../css/l/l_qkwybjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ai95kp4dp"/><path clip-rule="evenodd" class="l_qkwybjm"/></g>`,
		"fallback": "solar:multiple-forward-left-bold",
	});
}

export default Component;
