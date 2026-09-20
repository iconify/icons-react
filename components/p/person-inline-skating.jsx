import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-yrob-l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-yrob-l"/>`,
		"fallback": "pinhead:person-inline-skating",
	});
}

export default Component;
