import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey3j_zb_t.css';
import '../../css/u/usy2bsbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ey3j_zb_t"/><path class="usy2bsbyc"/></g>`,
		"fallback": "reicon:shop3",
	});
}

export default Component;
