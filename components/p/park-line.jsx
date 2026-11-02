import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w606y1h7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w606y1h7k"/>`,
		"fallback": "mingcute:park-line",
	});
}

export default Component;
