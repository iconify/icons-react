import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ur4to5ccl.css';
import '../../css/q/qrk9s_b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ur4to5ccl"/><path class="qrk9s_b5s"/></g>`,
		"fallback": "coolicons:sim-card-bulk-round",
	});
}

export default Component;
