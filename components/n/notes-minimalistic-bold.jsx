import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvn1l8b6u.css';
import '../../css/z/znftroncb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvn1l8b6u"/><path class="znftroncb"/></g>`,
		"fallback": "solar:notes-minimalistic-bold",
	});
}

export default Component;
