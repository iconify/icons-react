import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la7fppbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la7fppbpt"/>`,
		"fallback": "mingcute:map-pin-plus-inside-fill",
	});
}

export default Component;
