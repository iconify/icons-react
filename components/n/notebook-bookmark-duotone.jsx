import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykyycg0ch.css';
import '../../css/p/pa4wrbbok.css';
import '../../css/r/rsym7bckk.css';
import '../../css/n/n7-ys6bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ykyycg0ch"/><path class="pa4wrbbok"/><path class="rsym7bckk"/><path class="n7-ys6bfj"/></g>`,
		"fallback": "reicon:notebook-bookmark-duotone",
	});
}

export default Component;
