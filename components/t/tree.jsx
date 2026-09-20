import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4mo8hbcr.css';
import '../../css/z/ze8v0ibwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x4mo8hbcr"/><path class="ze8v0ibwd"/></g>`,
		"fallback": "pixelarticons:tree",
	});
}

export default Component;
