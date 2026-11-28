import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktgk846ch.css';
import '../../css/i/iwnvdpbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktgk846ch secondary"/><path class="iwnvdpbzx primary"/></g>`,
		"fallback": "iconaut:leaf-duotone",
	});
}

export default Component;
