import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js6l_obbf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js6l_obbf"/>`,
		"fallback": "picon:paypal",
	});
}

export default Component;
