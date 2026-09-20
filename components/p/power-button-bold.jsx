import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdq7f1w4s.css';
import '../../css/k/kbhx_-s8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdq7f1w4s"/><path class="kbhx_-s8m"/>`,
		"fallback": "streamline-ultimate:power-button-bold",
	});
}

export default Component;
