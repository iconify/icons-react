import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eeld29bnj.css';
import '../../css/d/dv9wxniev.css';
import '../../css/t/tau5rvb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eeld29bnj"/><path class="dv9wxniev"/><path clip-rule="evenodd" class="tau5rvb_q"/></g>`,
		"fallback": "solar:text-bold-circle-bold",
	});
}

export default Component;
