import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ss13veb9o.css';
import '../../css/w/w6ei_8b5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ss13veb9o"/><path clip-rule="evenodd" class="w6ei_8b5u"/></g>`,
		"fallback": "pepicons:person-filled",
	});
}

export default Component;
