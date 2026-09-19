import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dixj3-b3p.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dixj3-b3p"/>`,
		"fallback": "zmdi:ruler",
	});
}

export default Component;
