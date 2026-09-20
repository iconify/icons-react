import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqlnbtbkx.css';
import '../../css/m/mp_70hbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cqlnbtbkx"/><path clip-rule="evenodd" class="mp_70hbna"/></g>`,
		"fallback": "solar:key-minimalistic-square-2-bold",
	});
}

export default Component;
