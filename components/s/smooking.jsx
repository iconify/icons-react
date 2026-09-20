import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jev_oacmo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jev_oacmo"/>`,
		"fallback": "picon:smooking",
	});
}

export default Component;
