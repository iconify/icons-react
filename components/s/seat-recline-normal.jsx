import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcqo5bd0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcqo5bd0x"/>`,
		"fallback": "mdi:seat-recline-normal",
	});
}

export default Component;
