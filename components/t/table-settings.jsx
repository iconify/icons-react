import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cias1zbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cias1zbln"/>`,
		"fallback": "mdi:table-settings",
	});
}

export default Component;
