import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yicd53btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yicd53btx"/>`,
		"fallback": "mingcute:keyboard-off-line",
	});
}

export default Component;
