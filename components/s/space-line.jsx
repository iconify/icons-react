import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqv2x2bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqv2x2bjr"/>`,
		"fallback": "mingcute:space-line",
	});
}

export default Component;
