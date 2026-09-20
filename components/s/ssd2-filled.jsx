import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1ij4_b_p.css';
import '../../css/t/tbkyqd4aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1ij4_b_p"/><path clip-rule="evenodd" class="tbkyqd4aw"/></g>`,
		"fallback": "reicon:ssd2-filled",
	});
}

export default Component;
