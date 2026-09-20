import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdfbe1btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdfbe1btt"/>`,
		"fallback": "mdi:invoice-fast-outline",
	});
}

export default Component;
