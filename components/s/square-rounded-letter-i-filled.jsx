import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_1qh8v2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_1qh8v2h"/>`,
		"fallback": "tabler:square-rounded-letter-i-filled",
	});
}

export default Component;
