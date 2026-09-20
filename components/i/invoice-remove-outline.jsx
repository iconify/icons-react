import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks6-o_baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks6-o_baw"/>`,
		"fallback": "mdi:invoice-remove-outline",
	});
}

export default Component;
