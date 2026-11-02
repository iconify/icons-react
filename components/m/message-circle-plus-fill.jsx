import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-t1h_slz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-t1h_slz"/>`,
		"fallback": "mingcute:message-circle-plus-fill",
	});
}

export default Component;
