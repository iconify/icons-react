import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvi3j2b2c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvi3j2b2c"/>`,
		"fallback": "oi:map-marker",
	});
}

export default Component;
