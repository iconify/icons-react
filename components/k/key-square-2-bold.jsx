import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zuw-1kbtj.css';
import '../../css/q/qjwrmlrwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zuw-1kbtj"/><path class="qjwrmlrwd"/></g>`,
		"fallback": "solar:key-square-2-bold",
	});
}

export default Component;
