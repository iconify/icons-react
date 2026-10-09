import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez1ledqsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez1ledqsq"/>`,
		"fallback": "energy-icons:mine-cart-48-bold",
	});
}

export default Component;
