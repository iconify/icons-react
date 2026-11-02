import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuw6ov97b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuw6ov97b"/>`,
		"fallback": "mingcute:notion-line",
	});
}

export default Component;
