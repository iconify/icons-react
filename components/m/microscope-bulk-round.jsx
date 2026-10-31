import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z17-4tbnx.css';
import '../../css/i/ik87b_jjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z17-4tbnx"/><path class="ik87b_jjd"/></g>`,
		"fallback": "coolicons:microscope-bulk-round",
	});
}

export default Component;
