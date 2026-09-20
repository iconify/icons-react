import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvclpxbgj.css';
import '../../css/k/ka62jfb8e.css';
import '../../css/p/poocn6j4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvclpxbgj"/><path clip-rule="evenodd" class="ka62jfb8e"/><path class="poocn6j4k"/></g>`,
		"fallback": "reicon:laptop-download",
	});
}

export default Component;
