import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvdz56ifx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvdz56ifx"/>`,
		"fallback": "mdi:storefront-minus-outline",
	});
}

export default Component;
