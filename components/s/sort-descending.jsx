import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbu43julu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbu43julu"/>`,
		"fallback": "mdi:sort-descending",
	});
}

export default Component;
