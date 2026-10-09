import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9i__yblu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9i__yblu"/>`,
		"fallback": "energy-icons:resistor-20-bold",
	});
}

export default Component;
