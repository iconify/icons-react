import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk44qabdq.css';
import '../../css/j/jpd9n3d1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk44qabdq"/><path class="jpd9n3d1o"/>`,
		"fallback": "selfhst:pi-hole-light",
	});
}

export default Component;
