import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpul06c7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpul06c7t"/>`,
		"fallback": "mdi:receipt-text-minus-outline",
	});
}

export default Component;
