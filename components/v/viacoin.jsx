import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi9e-h2-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi9e-h2-h"/>`,
		"fallback": "la:viacoin",
	});
}

export default Component;
