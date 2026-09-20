import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-8rlzbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-8rlzbfb"/>`,
		"fallback": "mdi:notes-search",
	});
}

export default Component;
