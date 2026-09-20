import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uw2l8abgq.css';
import '../../css/f/fxs8d8bzw.css';
import '../../css/e/e3_kkkb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uw2l8abgq"/><path class="fxs8d8bzw"/><path clip-rule="evenodd" class="e3_kkkb-z"/></g>`,
		"fallback": "solar:turntable-music-note-bold",
	});
}

export default Component;
