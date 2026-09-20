import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x62obnb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x62obnb7k"/>`,
		"fallback": "mdi:notifications-none",
	});
}

export default Component;
