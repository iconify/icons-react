import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dokbrr4ih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dokbrr4ih"/>`,
		"fallback": "fa-solid:shield-virus",
	});
}

export default Component;
