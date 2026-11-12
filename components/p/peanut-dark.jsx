import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdbh8k3zh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdbh8k3zh"/>`,
		"fallback": "selfhst:peanut-dark",
	});
}

export default Component;
