import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcet0h_kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcet0h_kb"/>`,
		"fallback": "mdi:swimming-pool",
	});
}

export default Component;
