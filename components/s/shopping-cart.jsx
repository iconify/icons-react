import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft94xac-o.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft94xac-o"/>`,
		"fallback": "ps:shopping-cart",
	});
}

export default Component;
