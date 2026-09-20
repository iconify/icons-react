import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cfzt1bcbo.css';
import '../../css/p/palas7clc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cfzt1bcbo"/><path class="palas7clc"/></g>`,
		"fallback": "reicon:receipt-minus-filled",
	});
}

export default Component;
