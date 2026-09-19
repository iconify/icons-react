import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urvk2xbkb.css';
import '../../css/p/pjp7iyk8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="urvk2xbkb"/><path class="pjp7iyk8k"/></g>`,
		"fallback": "covid:social-distancing-attention",
	});
}

export default Component;
