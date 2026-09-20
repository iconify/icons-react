import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6ifo1irq.css';
import '../../css/i/ir9jvbdqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6ifo1irq"/><path clip-rule="evenodd" class="ir9jvbdqh"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-unlocked-outline",
	});
}

export default Component;
