import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l64tr8bru.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l64tr8bru"/>`,
		"fallback": "fa-brands:napster",
	});
}

export default Component;
