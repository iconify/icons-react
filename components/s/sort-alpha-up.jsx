import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srcf7abwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srcf7abwa"/>`,
		"fallback": "cil:sort-alpha-up",
	});
}

export default Component;
