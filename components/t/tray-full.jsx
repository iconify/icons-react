import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb14r95-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb14r95-c"/>`,
		"fallback": "mdi:tray-full",
	});
}

export default Component;
