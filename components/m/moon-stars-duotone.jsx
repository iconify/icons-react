import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9_9o-xsb.css';
import '../../css/w/wns5-ccua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e9_9o-xsb"/><path class="wns5-ccua"/></g>`,
		"fallback": "reicon:moon-stars-duotone",
	});
}

export default Component;
