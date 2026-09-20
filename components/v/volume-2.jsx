import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sa7iy4w6q.css';
import '../../css/u/uki6yyxjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sa7iy4w6q"/><path class="uki6yyxjd"/></g>`,
		"fallback": "nrk:volume-2",
	});
}

export default Component;
