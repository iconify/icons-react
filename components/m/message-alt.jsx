import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wik2vhbpk.css';
import '../../css/d/dwzw9sbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wik2vhbpk"/><path class="dwzw9sbnt"/></g>`,
		"fallback": "mono-icons:message-alt",
	});
}

export default Component;
