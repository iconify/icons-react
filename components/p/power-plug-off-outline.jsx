import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ick56cv-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ick56cv-o"/>`,
		"fallback": "mdi:power-plug-off-outline",
	});
}

export default Component;
