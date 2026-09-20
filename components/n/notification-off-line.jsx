import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuo1iexbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuo1iexbs"/>`,
		"fallback": "mingcute:notification-off-line",
	});
}

export default Component;
