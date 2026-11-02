import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inb8ybb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inb8ybb8j"/>`,
		"fallback": "mingcute:text-direction-left-line",
	});
}

export default Component;
