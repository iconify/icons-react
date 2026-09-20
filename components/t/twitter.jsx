import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4ge2mb4z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4ge2mb4z"/>`,
		"fallback": "raphael:twitter",
	});
}

export default Component;
