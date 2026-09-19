import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofyn4sb8x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofyn4sb8x"/>`,
		"fallback": "f7:phone-circle-fill",
	});
}

export default Component;
