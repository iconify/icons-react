import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cf__iaczl.css';
import '../../css/i/ib6x-x2vz.css';
import '../../css/e/ei2yowyoq.css';
import '../../css/x/x1vgw5b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cf__iaczl"/><path clip-rule="evenodd" class="ib6x-x2vz"/><path class="ei2yowyoq"/><path class="x1vgw5b7v"/></g>`,
		"fallback": "solar:sale-outline",
	});
}

export default Component;
