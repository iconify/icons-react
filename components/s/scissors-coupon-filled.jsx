import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cg8b47bcn.css';
import '../../css/m/mg-p678kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cg8b47bcn"/><path class="mg-p678kc"/></g>`,
		"fallback": "reicon:scissors-coupon-filled",
	});
}

export default Component;
