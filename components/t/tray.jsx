import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvx14oi-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvx14oi-e"/>`,
		"fallback": "mdi:tray",
	});
}

export default Component;
