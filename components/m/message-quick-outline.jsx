import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szvk_z3ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szvk_z3ya"/>`,
		"fallback": "mdi:message-quick-outline",
	});
}

export default Component;
