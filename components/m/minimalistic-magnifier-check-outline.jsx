import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxuzj6ljm.css';
import '../../css/w/wc7ursblp.css';
import '../../css/f/fnlxv3bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxuzj6ljm"/><path class="wc7ursblp"/><path clip-rule="evenodd" class="fnlxv3bgz"/></g>`,
		"fallback": "solar:minimalistic-magnifier-check-outline",
	});
}

export default Component;
