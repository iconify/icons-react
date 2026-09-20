import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k17b8osvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k17b8osvx"/>`,
		"fallback": "mingcute:message-3-fill",
	});
}

export default Component;
