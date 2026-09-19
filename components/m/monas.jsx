import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix5l_k_we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix5l_k_we"/>`,
		"fallback": "hugeicons:monas",
	});
}

export default Component;
