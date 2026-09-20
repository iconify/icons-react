import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5uez4b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5uez4b9h"/>`,
		"fallback": "mdi:rat",
	});
}

export default Component;
