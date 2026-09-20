import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m09ees1ha.css';
import '../../css/b/b3j-b8zmr.css';
import '../../css/p/pn3q5-w6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m09ees1ha"/><path class="b3j-b8zmr"/><path clip-rule="evenodd" class="pn3q5-w6j"/></g>`,
		"fallback": "reicon:planet2-duotone",
	});
}

export default Component;
