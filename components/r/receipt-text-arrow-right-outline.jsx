import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js1dubcgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js1dubcgx"/>`,
		"fallback": "mdi:receipt-text-arrow-right-outline",
	});
}

export default Component;
