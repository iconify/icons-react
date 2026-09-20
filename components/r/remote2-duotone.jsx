import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6y0h7bnk.css';
import '../../css/f/fssqibcht.css';
import '../../css/q/qwt-1fbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6y0h7bnk"/><path class="fssqibcht"/><path clip-rule="evenodd" class="qwt-1fbxl"/></g>`,
		"fallback": "reicon:remote2-duotone",
	});
}

export default Component;
