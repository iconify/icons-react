import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcbw_w9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpcbw_w9o"/>`,
		"fallback": "mingcute:link-2-fill",
	});
}

export default Component;
