import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ye52-2bjo.css';
import '../../css/l/l-oan6uxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ye52-2bjo"/><path class="l-oan6uxi"/></g>`,
		"fallback": "solar:sticker-circle-linear",
	});
}

export default Component;
