import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrz9yob5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrz9yob5u"/>`,
		"fallback": "mdi:user-search",
	});
}

export default Component;
