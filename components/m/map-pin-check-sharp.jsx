import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnf8mabbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnf8mabbu"/>`,
		"fallback": "keyline-icons:map-pin-check-sharp",
	});
}

export default Component;
