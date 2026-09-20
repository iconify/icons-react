import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfi4u8c5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfi4u8c5n"/>`,
		"fallback": "mdi:speaker-message",
	});
}

export default Component;
