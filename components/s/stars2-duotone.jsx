import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r65c_-bzz.css';
import '../../css/y/ycn1-v67b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r65c_-bzz"/><path class="ycn1-v67b"/></g>`,
		"fallback": "reicon:stars2-duotone",
	});
}

export default Component;
