import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtps0__ug.css';
import '../../css/r/rkwrt1bji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtps0__ug"/><path clip-rule="evenodd" class="rkwrt1bji"/></g>`,
		"fallback": "pepicons:smartphone-notch-print",
	});
}

export default Component;
