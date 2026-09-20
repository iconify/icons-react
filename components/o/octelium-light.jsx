import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6def11eu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6def11eu"/>`,
		"fallback": "selfhst:octelium-light",
	});
}

export default Component;
