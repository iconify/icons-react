import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3v0l4bot.css';
import '../../css/d/d4uebbsty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3v0l4bot"/><path class="d4uebbsty"/></g>`,
		"fallback": "hugeicons:move-horizontal",
	});
}

export default Component;
