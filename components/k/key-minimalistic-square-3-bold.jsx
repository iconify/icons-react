import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/seilkca6t.css';
import '../../css/v/vkaw_g7cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="seilkca6t"/><path clip-rule="evenodd" class="vkaw_g7cn"/></g>`,
		"fallback": "solar:key-minimalistic-square-3-bold",
	});
}

export default Component;
