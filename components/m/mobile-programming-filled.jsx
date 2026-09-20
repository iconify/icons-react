import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxd_9ybuk.css';
import '../../css/v/vkw2dhfhc.css';
import '../../css/m/mca097_7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zxd_9ybuk"/><path class="vkw2dhfhc"/><path class="mca097_7c"/></g>`,
		"fallback": "reicon:mobile-programming-filled",
	});
}

export default Component;
