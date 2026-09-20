import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbe4eomjn.css';
import '../../css/r/rrlyyb2jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbe4eomjn"/><path clip-rule="evenodd" class="rrlyyb2jg"/></g>`,
		"fallback": "reicon:shield-lock2-duotone",
	});
}

export default Component;
