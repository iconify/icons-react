import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/navyw9b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="navyw9b5x"/>`,
		"fallback": "mingcute:toggle-right-2-line",
	});
}

export default Component;
