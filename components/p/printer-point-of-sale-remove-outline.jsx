import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-yuo3b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-yuo3b6o"/>`,
		"fallback": "mdi:printer-point-of-sale-remove-outline",
	});
}

export default Component;
