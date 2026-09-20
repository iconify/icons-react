import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5qh5f2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5qh5f2u"/>`,
		"fallback": "mingcute:pinwheel-2-line",
	});
}

export default Component;
