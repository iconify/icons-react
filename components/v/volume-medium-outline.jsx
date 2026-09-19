import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8unnac5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8unnac5t"/>`,
		"fallback": "famicons:volume-medium-outline",
	});
}

export default Component;
