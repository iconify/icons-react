import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nblr36b5l.css';
import '../../css/n/np7d9ab3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nblr36b5l"/><path class="np7d9ab3o"/></g>`,
		"fallback": "mynaui:map-pin-off-solid",
	});
}

export default Component;
