import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td43dj0tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td43dj0tz"/>`,
		"fallback": "coolicons:shopping-basket-fill-round",
	});
}

export default Component;
