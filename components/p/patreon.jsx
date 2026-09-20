import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygfhj0bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygfhj0bql"/>`,
		"fallback": "mdi:patreon",
	});
}

export default Component;
