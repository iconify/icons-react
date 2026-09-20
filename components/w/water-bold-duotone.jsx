import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7ajfnkbg.css';
import '../../css/k/kw0cwib2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7ajfnkbg"/><path class="kw0cwib2s"/></g>`,
		"fallback": "solar:water-bold-duotone",
	});
}

export default Component;
