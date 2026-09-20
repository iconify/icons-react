import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l823r3h8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l823r3h8t"/>`,
		"fallback": "mdi:sail-boat-crash",
	});
}

export default Component;
