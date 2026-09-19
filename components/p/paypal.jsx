import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2dg93b_o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2dg93b_o"/>`,
		"fallback": "dinkie-icons:paypal",
	});
}

export default Component;
