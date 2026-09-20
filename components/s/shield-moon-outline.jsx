import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asi4edbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asi4edbqp"/>`,
		"fallback": "mdi:shield-moon-outline",
	});
}

export default Component;
