import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu8r0xb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu8r0xb4h"/>`,
		"fallback": "sidekickicons:quotation-mark",
	});
}

export default Component;
