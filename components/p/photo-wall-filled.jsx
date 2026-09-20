import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy_u8mb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy_u8mb7v"/>`,
		"fallback": "weui:photo-wall-filled",
	});
}

export default Component;
