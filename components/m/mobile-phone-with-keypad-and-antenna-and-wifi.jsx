import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-cs117v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-cs117v"/>`,
		"fallback": "pinhead:mobile-phone-with-keypad-and-antenna-and-wifi",
	});
}

export default Component;
