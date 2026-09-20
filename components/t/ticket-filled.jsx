import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyb8srbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyb8srbmm"/>`,
		"fallback": "tdesign:ticket-filled",
	});
}

export default Component;
