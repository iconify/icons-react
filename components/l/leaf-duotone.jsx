import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0i8bfbeo.css';
import '../../css/c/cq3_n-btc.css';
import '../../css/e/ep9cbbb3g.css';
import '../../css/d/d9h_fntko.css';
import '../../css/q/qslri4e6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j0i8bfbeo"/><path class="cq3_n-btc"/><path class="ep9cbbb3g"/><path class="d9h_fntko"/><path class="qslri4e6v"/></g>`,
		"fallback": "reicon:leaf-duotone",
	});
}

export default Component;
