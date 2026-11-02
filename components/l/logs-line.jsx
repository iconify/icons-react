import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzq88fb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzq88fb6o"/>`,
		"fallback": "mingcute:logs-line",
	});
}

export default Component;
