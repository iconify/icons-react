import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7zn_vbwr.css';
import '../../css/u/u-fy1obmq.css';
import '../../css/a/a7yxpnbqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7zn_vbwr"/><path class="u-fy1obmq"/><path class="a7yxpnbqs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mechanic",
	});
}

export default Component;
