import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enc1vmb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enc1vmb0z"/>`,
		"fallback": "ps:tumble-dry",
	});
}

export default Component;
