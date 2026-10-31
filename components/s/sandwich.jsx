import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rfamvro4r.css';
import '../../css/q/qe9vmvbor.css';
import '../../css/v/v9r399hyu.css';
import '../../css/w/w1vn-jecy.css';
import '../../css/e/e4m2_se9b.css';
import '../../css/x/xev4p-u1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rfamvro4r wm-shadow"/><path class="qe9vmvbor wm-shadow"/><path class="v9r399hyu"/><path class="w1vn-jecy"/><path class="e4m2_se9b"/><path class="xev4p-u1t"/></g>`,
		"fallback": "withicons-brutal:sandwich",
	});
}

export default Component;
