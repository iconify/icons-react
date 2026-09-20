import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un82f_hcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un82f_hcs"/>`,
		"fallback": "mingcute:notification-line",
	});
}

export default Component;
