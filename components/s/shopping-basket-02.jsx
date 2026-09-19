import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9eo6d69l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9eo6d69l"/>`,
		"fallback": "hugeicons:shopping-basket-02",
	});
}

export default Component;
