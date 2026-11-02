import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9s_kubnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9s_kubnh"/>`,
		"fallback": "mingcute:key-2-line",
	});
}

export default Component;
