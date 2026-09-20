import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yveeyxb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yveeyxb_m"/>`,
		"fallback": "mingcute:large-arrow-up-line",
	});
}

export default Component;
