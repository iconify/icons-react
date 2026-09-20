import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi1k02b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi1k02b2v"/>`,
		"fallback": "tabler:shopping-cart-filled",
	});
}

export default Component;
