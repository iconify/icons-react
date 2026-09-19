import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb9sa7noz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb9sa7noz"/>`,
		"fallback": "carbon:movement",
	});
}

export default Component;
