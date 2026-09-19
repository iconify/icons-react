import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yax0ei6je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yax0ei6je"/>`,
		"fallback": "heroicons-outline:users",
	});
}

export default Component;
