import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee_pagbuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee_pagbuy"/>`,
		"fallback": "game-icons:skull-slices",
	});
}

export default Component;
