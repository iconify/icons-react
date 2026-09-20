import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uon7ubcpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uon7ubcpj"/>`,
		"fallback": "mingcute:magic-3-line",
	});
}

export default Component;
