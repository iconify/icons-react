import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_vbkj5go.css';
import '../../css/c/cgi5okb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_vbkj5go"/><path clip-rule="evenodd" class="cgi5okb5v"/></g>`,
		"fallback": "solar:shield-keyhole-minimalistic-bold",
	});
}

export default Component;
