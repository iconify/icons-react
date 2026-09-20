import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6k26_bab.css';
import '../../css/k/khff3selz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6k26_bab"/><path class="khff3selz"/></g>`,
		"fallback": "reicon:refresh3-filled",
	});
}

export default Component;
