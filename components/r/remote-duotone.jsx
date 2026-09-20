import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6y0h7bnk.css';
import '../../css/q/qwt-1fbxl.css';
import '../../css/b/bk4q2_byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6y0h7bnk"/><path clip-rule="evenodd" class="qwt-1fbxl"/><path class="bk4q2_byp"/></g>`,
		"fallback": "reicon:remote-duotone",
	});
}

export default Component;
