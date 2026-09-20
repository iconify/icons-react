import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo4aw-d5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo4aw-d5k"/>`,
		"fallback": "mdi:invoice-text-plus",
	});
}

export default Component;
