import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y-r-x5_vg.css';
import '../../css/q/qnmof2bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y-r-x5_vg"/><path class="qnmof2bnq"/></g>`,
		"fallback": "hugeicons:message-question",
	});
}

export default Component;
