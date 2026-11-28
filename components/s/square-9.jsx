import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn6q80bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn6q80bma"/>`,
		"fallback": "noviair-light:square-9",
	});
}

export default Component;
