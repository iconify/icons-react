import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbxllk_zm.css';
import '../../css/f/f63-i9bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sbxllk_zm"/><path clip-rule="evenodd" class="f63-i9bah"/></g>`,
		"fallback": "solar:thermometer-outline",
	});
}

export default Component;
