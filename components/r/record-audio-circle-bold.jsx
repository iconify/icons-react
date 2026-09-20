import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2a79ob9k.css';
import '../../css/v/v7pvvre2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2a79ob9k"/><path clip-rule="evenodd" class="v7pvvre2y"/></g>`,
		"fallback": "solar:record-audio-circle-bold",
	});
}

export default Component;
