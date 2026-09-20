import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/d/dburuob9x.css';
import '../../css/j/j7a8dw7vf.css';
import '../../css/s/s5chcxbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xiby4z7mg"/><path class="dburuob9x"/><path class="j7a8dw7vf"/><path clip-rule="evenodd" class="s5chcxbnn"/></g>`,
		"fallback": "solar:ufo-2-outline",
	});
}

export default Component;
