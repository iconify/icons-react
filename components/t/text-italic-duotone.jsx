import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w28wwranq.css';
import '../../css/d/dhf3rmlxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w28wwranq"/><path class="dhf3rmlxt"/></g>`,
		"fallback": "reicon:text-italic-duotone",
	});
}

export default Component;
