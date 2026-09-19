import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0zp_hbal.css';
import '../../css/b/bnti09bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0zp_hbal"/><path clip-rule="evenodd" class="bnti09bai"/></g>`,
		"fallback": "gg:more-r",
	});
}

export default Component;
