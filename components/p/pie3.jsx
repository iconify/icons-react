import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ng5gk3blk.css';
import '../../css/n/nzqhnibnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ng5gk3blk"/><path class="nzqhnibnw"/></g>`,
		"fallback": "reicon:pie3",
	});
}

export default Component;
