import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg3udub2c.css';
import '../../css/j/jwfphblum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fg3udub2c"/><path clip-rule="evenodd" class="jwfphblum"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-outline",
	});
}

export default Component;
