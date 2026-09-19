import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9jgx7bsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9jgx7bsd"/>`,
		"fallback": "fa6-regular:square-full",
	});
}

export default Component;
