import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up06yedxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up06yedxm"/>`,
		"fallback": "mingcute:send-plane-line",
	});
}

export default Component;
