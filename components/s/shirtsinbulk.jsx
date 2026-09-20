import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-s5cq-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-s5cq-t"/>`,
		"fallback": "la:shirtsinbulk",
	});
}

export default Component;
