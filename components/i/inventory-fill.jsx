import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fveusnqss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fveusnqss"/>`,
		"fallback": "mingcute:inventory-fill",
	});
}

export default Component;
