import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9nlooiud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9nlooiud"/>`,
		"fallback": "hugeicons:shopping-basket-remove-03",
	});
}

export default Component;
