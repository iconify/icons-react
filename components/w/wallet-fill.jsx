import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv4ot8bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv4ot8bdv"/>`,
		"fallback": "mingcute:wallet-fill",
	});
}

export default Component;
