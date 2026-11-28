import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7w7a1uez.css';
import '../../css/c/c82oy_47t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t7w7a1uez"/><path class="c82oy_47t primary"/></g>`,
		"fallback": "iconaut:magnet-duotone",
	});
}

export default Component;
