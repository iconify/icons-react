import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i29phwzfa.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i29phwzfa"/>`,
		"fallback": "garden:pin-remove-fill-12",
	});
}

export default Component;
