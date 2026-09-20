import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa9p1mb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa9p1mb0y"/>`,
		"fallback": "mingcute:send-fill",
	});
}

export default Component;
