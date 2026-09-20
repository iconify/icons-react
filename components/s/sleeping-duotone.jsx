import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/th01gsbwo.css';
import '../../css/s/supoyxbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="th01gsbwo"/><path class="supoyxbof"/></g>`,
		"fallback": "reicon:sleeping-duotone",
	});
}

export default Component;
