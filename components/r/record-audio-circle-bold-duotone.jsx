import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/d/dvgw3nb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path clip-rule="evenodd" class="dvgw3nb2z"/></g>`,
		"fallback": "solar:record-audio-circle-bold-duotone",
	});
}

export default Component;
