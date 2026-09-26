import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ro-9gqebr.css';
import '../../css/o/o1xp09xqm.css';
import '../../css/a/a1vd4mbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ro-9gqebr"/><path class="o1xp09xqm"/><path class="a1vd4mbfu"/></g>`,
		"fallback": "solar:sledgehammer-bold",
	});
}

export default Component;
