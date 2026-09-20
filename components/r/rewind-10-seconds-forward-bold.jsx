import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpbwpqkog.css';
import '../../css/n/n5mi1zbsm.css';
import '../../css/u/uw00s73td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vpbwpqkog"/><path class="n5mi1zbsm"/><path clip-rule="evenodd" class="uw00s73td"/></g>`,
		"fallback": "solar:rewind-10-seconds-forward-bold",
	});
}

export default Component;
