import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiiz1cyia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiiz1cyia"/>`,
		"fallback": "la:researchgate",
	});
}

export default Component;
