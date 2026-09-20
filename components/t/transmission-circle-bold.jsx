import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saoi0tb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="saoi0tb0e"/>`,
		"fallback": "solar:transmission-circle-bold",
	});
}

export default Component;
