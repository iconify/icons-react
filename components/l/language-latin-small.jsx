import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twi6k7b1h.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twi6k7b1h"/>`,
		"fallback": "dinkie-icons:language-latin-small",
	});
}

export default Component;
