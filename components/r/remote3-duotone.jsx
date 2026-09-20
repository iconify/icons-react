import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6y0h7bnk.css';
import '../../css/c/c_1gxwnlz.css';
import '../../css/g/gvutyp9ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6y0h7bnk"/><path class="c_1gxwnlz"/><path clip-rule="evenodd" class="gvutyp9ik"/></g>`,
		"fallback": "reicon:remote3-duotone",
	});
}

export default Component;
