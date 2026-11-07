import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr5o4wufh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr5o4wufh"/>`,
		"fallback": "pinhead:person-sleeping-in-eaved-leanto-building",
	});
}

export default Component;
