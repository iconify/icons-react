import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9qxpm1xz.css';
import '../../css/z/z41x5fbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9qxpm1xz"/><path class="z41x5fbyy"/></g>`,
		"fallback": "pixelarticons:phone-outgoing",
	});
}

export default Component;
