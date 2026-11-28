import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qx_dy3b4t.css';
import '../../css/r/r-k-ywbqs.css';
import '../../css/x/xhj-0cbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qx_dy3b4t"/><path class="r-k-ywbqs"/><path class="xhj-0cbdu"/></g>`,
		"fallback": "iconaut:watermelon",
	});
}

export default Component;
