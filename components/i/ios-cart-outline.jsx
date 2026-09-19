import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uge65rbva.css';
import '../../css/p/pq7bzbb4c.css';
import '../../css/e/e-neq9bwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uge65rbva"/><path class="pq7bzbb4c"/><path class="e-neq9bwz"/>`,
		"fallback": "ion:ios-cart-outline",
	});
}

export default Component;
