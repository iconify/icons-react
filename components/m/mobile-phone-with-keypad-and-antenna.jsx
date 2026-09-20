import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/govgh1bth.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="govgh1bth"/>`,
		"fallback": "pinhead:mobile-phone-with-keypad-and-antenna",
	});
}

export default Component;
