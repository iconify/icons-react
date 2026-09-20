import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkkze058o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkkze058o"/>`,
		"fallback": "mdi:invoice-arrow-left-outline",
	});
}

export default Component;
