import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6zsg_vwc.css';
import '../../css/m/mjst2qbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6zsg_vwc secondary"/><path class="mjst2qbgl primary"/></g>`,
		"fallback": "iconaut:key-round-duotone",
	});
}

export default Component;
