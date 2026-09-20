import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roky1l4ah.css';
import '../../css/e/e85-u6b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roky1l4ah"/><path clip-rule="evenodd" class="e85-u6b-b"/></g>`,
		"fallback": "reicon:speaker-duotone",
	});
}

export default Component;
