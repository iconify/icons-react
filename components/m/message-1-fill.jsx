import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_3rjki6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_3rjki6h"/>`,
		"fallback": "mingcute:message-1-fill",
	});
}

export default Component;
