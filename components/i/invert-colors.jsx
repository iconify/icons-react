import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9owf8b1r.css';

const viewBox = {"width":344,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9owf8b1r"/>`,
		"fallback": "zmdi:invert-colors",
	});
}

export default Component;
