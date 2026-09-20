import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjhhubcgu.css';
import '../../css/d/dd-30bcmc.css';
import '../../css/q/qthr2jvjl.css';
import '../../css/y/ygg0mk33w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjhhubcgu"/><path class="dd-30bcmc"/><path class="qthr2jvjl"/><path clip-rule="evenodd" class="ygg0mk33w"/></g>`,
		"fallback": "solar:masks-outline",
	});
}

export default Component;
