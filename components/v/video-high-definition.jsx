import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8_u2ackk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8_u2ackk"/>`,
		"fallback": "mdi:video-high-definition",
	});
}

export default Component;
