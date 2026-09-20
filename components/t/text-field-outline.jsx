import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0yspb4vk.css';
import '../../css/u/uak7c7lzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0yspb4vk"/><path clip-rule="evenodd" class="uak7c7lzt"/></g>`,
		"fallback": "solar:text-field-outline",
	});
}

export default Component;
