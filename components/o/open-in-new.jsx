import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw_57bbcu.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw_57bbcu"/>`,
		"fallback": "zmdi:open-in-new",
	});
}

export default Component;
