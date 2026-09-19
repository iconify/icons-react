import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6aiztlet.css';

const viewBox = {"width":456,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6aiztlet"/>`,
		"fallback": "zmdi:rotate-90-degrees-ccw",
	});
}

export default Component;
