import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz9ks891j.css';
import '../../css/q/qqvvtvbuf.css';
import '../../css/c/cmmp7lbmc.css';
import '../../css/c/cnltd1b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vz9ks891j"/><path clip-rule="evenodd" class="qqvvtvbuf"/><path clip-rule="evenodd" class="cmmp7lbmc"/><path class="cnltd1b4n"/></g>`,
		"fallback": "solar:user-speak-outline",
	});
}

export default Component;
