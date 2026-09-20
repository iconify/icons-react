import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg7hhucff.css';
import '../../css/i/i57-i0ixs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg7hhucff"/><path class="i57-i0ixs"/>`,
		"fallback": "streamline-ultimate:shopping-basket-star-bold",
	});
}

export default Component;
