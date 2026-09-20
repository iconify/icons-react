import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsu17feyn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsu17feyn"/>`,
		"fallback": "pinhead:mobile-phone-with-keypad-and-antenna-beside-mobile-phone-with-touchscreen-and-antenna",
	});
}

export default Component;
