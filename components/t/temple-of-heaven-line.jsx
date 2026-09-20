import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnwz1hbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnwz1hbhm"/>`,
		"fallback": "mingcute:temple-of-heaven-line",
	});
}

export default Component;
