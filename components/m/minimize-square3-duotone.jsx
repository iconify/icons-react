import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh9g7lyzs.css';
import '../../css/a/ao2txpb8f.css';
import '../../css/c/ca5q_qgrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh9g7lyzs"/><path clip-rule="evenodd" class="ao2txpb8f"/><path class="ca5q_qgrk"/></g>`,
		"fallback": "reicon:minimize-square3-duotone",
	});
}

export default Component;
