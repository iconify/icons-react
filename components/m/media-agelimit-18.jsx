import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3fz51bfm.css';
import '../../css/k/kq6gg0b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3fz51bfm"/><path class="kq6gg0b4l"/></g>`,
		"fallback": "nrk:media-agelimit-18",
	});
}

export default Component;
