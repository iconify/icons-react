import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r92klmtxk.css';
import '../../css/r/r5q9hhb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r92klmtxk"/><path class="r5q9hhb2r"/></g>`,
		"fallback": "solar:pin-circle-bold-duotone",
	});
}

export default Component;
