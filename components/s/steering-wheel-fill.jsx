import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi95u7abw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi95u7abw"/>`,
		"fallback": "mingcute:steering-wheel-fill",
	});
}

export default Component;
