import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b9h1_ydwr.css';
import '../../css/s/s-s-jernq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="b9h1_ydwr"/><path class="s-s-jernq"/></g>`,
		"fallback": "hugeicons:pay-by-check",
	});
}

export default Component;
