import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq17t3gbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq17t3gbj"/>`,
		"fallback": "mingcute:print-line",
	});
}

export default Component;
