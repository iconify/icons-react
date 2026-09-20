import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e28ifp_ws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e28ifp_ws"/>`,
		"fallback": "subway:time-5",
	});
}

export default Component;
