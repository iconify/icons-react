import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1i1z-bbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1i1z-bbu"/>`,
		"fallback": "la:keyboard-solid",
	});
}

export default Component;
