import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vls5gbfof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vls5gbfof"/>`,
		"fallback": "mdi:tune-variant",
	});
}

export default Component;
