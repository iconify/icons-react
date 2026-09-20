import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7jvj_bep.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7jvj_bep"/>`,
		"fallback": "pinhead:mobile-phone-with-keypad-and-antenna-and-bolt",
	});
}

export default Component;
