import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxuzj6ljm.css';
import '../../css/c/cnjmecc5c.css';
import '../../css/f/fnlxv3bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxuzj6ljm"/><path class="cnjmecc5c"/><path clip-rule="evenodd" class="fnlxv3bgz"/></g>`,
		"fallback": "solar:minimalistic-magnifier-close-outline",
	});
}

export default Component;
