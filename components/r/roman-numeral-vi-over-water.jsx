import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p05ebdbwi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p05ebdbwi"/>`,
		"fallback": "pinhead:roman-numeral-vi-over-water",
	});
}

export default Component;
