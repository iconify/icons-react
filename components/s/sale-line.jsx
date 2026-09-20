import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt1wq7lox.css';
import '../../css/k/kabj7mbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt1wq7lox"/><path class="kabj7mbth"/>`,
		"fallback": "mingcute:sale-line",
	});
}

export default Component;
