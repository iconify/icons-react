import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxne26btz.css';
import '../../css/v/vqpbunbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxne26btz"/><path clip-rule="evenodd" class="vqpbunbpd"/></g>`,
		"fallback": "majesticons:map-simple",
	});
}

export default Component;
