import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kug2_lg1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kug2_lg1z"/>`,
		"fallback": "mdi:truck-subtract",
	});
}

export default Component;
