import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bh3lzub3r.css';
import '../../css/x/x--ca5puy.css';
import '../../css/o/oojzhkm-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bh3lzub3r"/><path class="x--ca5puy"/><path clip-rule="evenodd" class="oojzhkm-u"/></g>`,
		"fallback": "solar:sticker-smile-square-bold",
	});
}

export default Component;
