import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkqj76y_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkqj76y_q"/>`,
		"fallback": "mdi:microphone-variant-off",
	});
}

export default Component;
