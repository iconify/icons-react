import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5rba1iag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5rba1iag"/>`,
		"fallback": "keyline-icons:map-pin-minus-sharp",
	});
}

export default Component;
