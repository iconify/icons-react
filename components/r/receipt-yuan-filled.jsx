import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8cjv2wev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8cjv2wev"/>`,
		"fallback": "tabler:receipt-yuan-filled",
	});
}

export default Component;
