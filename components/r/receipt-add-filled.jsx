import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/palas7clc.css';
import '../../css/y/yjtq2ac8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="palas7clc"/><path class="yjtq2ac8a"/></g>`,
		"fallback": "reicon:receipt-add-filled",
	});
}

export default Component;
