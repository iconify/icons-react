import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwqi-5bwl.css';
import '../../css/g/g9fb_9bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwqi-5bwl"/><path clip-rule="evenodd" class="g9fb_9bcm"/></g>`,
		"fallback": "reicon:volume-up-filled",
	});
}

export default Component;
