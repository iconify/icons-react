import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fskno8-fw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fskno8-fw"/>`,
		"fallback": "la:users-solid",
	});
}

export default Component;
