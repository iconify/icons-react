import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsk9izbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsk9izbdc"/>`,
		"fallback": "uil:paypal",
	});
}

export default Component;
