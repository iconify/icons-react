import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk590ib5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk590ib5u"/>`,
		"fallback": "mingcute:sydney-opera-house-fill",
	});
}

export default Component;
