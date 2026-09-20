import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh32403cz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh32403cz"/>`,
		"fallback": "roentgen:vending-ice-cream-stick",
	});
}

export default Component;
