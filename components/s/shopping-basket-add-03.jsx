import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yccolbbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yccolbbcz"/>`,
		"fallback": "hugeicons:shopping-basket-add-03",
	});
}

export default Component;
