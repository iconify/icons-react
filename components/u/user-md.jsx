import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnht8g86b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnht8g86b"/>`,
		"fallback": "la:user-md",
	});
}

export default Component;
