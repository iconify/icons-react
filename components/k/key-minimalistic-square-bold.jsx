import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp0dyis7c.css';
import '../../css/w/wjom5qbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zp0dyis7c"/><path clip-rule="evenodd" class="wjom5qbiv"/></g>`,
		"fallback": "solar:key-minimalistic-square-bold",
	});
}

export default Component;
