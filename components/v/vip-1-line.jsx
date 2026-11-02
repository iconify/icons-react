import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz1fy6a1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz1fy6a1k"/>`,
		"fallback": "mingcute:vip-1-line",
	});
}

export default Component;
