import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v0mnniwzq.css';
import '../../css/v/v1e_5xx-u.css';
import '../../css/z/zwbprvbgc.css';
import '../../css/d/dp5zcac4d.css';
import '../../css/l/l8lhr17sb.css';
import '../../css/w/w5qhdv_nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v0mnniwzq"/><path class="v1e_5xx-u"/><path class="zwbprvbgc"/><path class="dp5zcac4d"/><path class="l8lhr17sb"/><path class="w5qhdv_nw"/></g>`,
		"fallback": "solar:users-group-two-rounded-bold",
	});
}

export default Component;
