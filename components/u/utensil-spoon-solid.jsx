import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu3x4jbmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu3x4jbmc"/>`,
		"fallback": "la:utensil-spoon-solid",
	});
}

export default Component;
