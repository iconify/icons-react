import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdit3bbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdit3bbvh"/>`,
		"fallback": "mingcute:monero-line",
	});
}

export default Component;
