import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwtn6rbbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwtn6rbbx"/>`,
		"fallback": "fa-solid:sort-amount-down",
	});
}

export default Component;
