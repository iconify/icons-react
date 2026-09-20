import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bh3lzub3r.css';
import '../../css/x/x--ca5puy.css';
import '../../css/e/ey6k-m1dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bh3lzub3r"/><path class="x--ca5puy"/><path class="ey6k-m1dq"/></g>`,
		"fallback": "solar:sticker-square-bold",
	});
}

export default Component;
