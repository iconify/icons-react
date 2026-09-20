import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxb6k-z4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxb6k-z4r"/>`,
		"fallback": "mingcute:message-2-ai-line",
	});
}

export default Component;
