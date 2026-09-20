import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9drt8b5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9drt8b5t"/>`,
		"fallback": "la:newspaper",
	});
}

export default Component;
