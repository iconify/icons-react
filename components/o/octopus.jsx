import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh16486iy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh16486iy"/>`,
		"fallback": "picon:octopus",
	});
}

export default Component;
