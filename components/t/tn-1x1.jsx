import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srq6p5b9s.css';
import '../../css/g/gxp1ob29q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srq6p5b9s"/><path class="gxp1ob29q"/>`,
		"fallback": "flag:tn-1x1",
	});
}

export default Component;
