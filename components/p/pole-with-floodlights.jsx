import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu9nlz-2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu9nlz-2e"/>`,
		"fallback": "pinhead:pole-with-floodlights",
	});
}

export default Component;
