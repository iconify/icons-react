import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0x9hmbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0x9hmbyd"/>`,
		"fallback": "mdi:storefront-edit-outline",
	});
}

export default Component;
