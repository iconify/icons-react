import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep6q_wb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep6q_wb2x"/>`,
		"fallback": "mdi:menu-down",
	});
}

export default Component;
