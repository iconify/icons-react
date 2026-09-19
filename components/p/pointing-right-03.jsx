import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4owv6bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4owv6bfi"/>`,
		"fallback": "hugeicons:pointing-right-03",
	});
}

export default Component;
