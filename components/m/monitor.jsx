import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ntzi1w4nm.css';
import '../../css/w/w_k0w4xei.css';
import '../../css/r/r-c_vcb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ntzi1w4nm"/><path class="w_k0w4xei"/><path class="r-c_vcb4h"/></g>`,
		"fallback": "matita:monitor",
	});
}

export default Component;
