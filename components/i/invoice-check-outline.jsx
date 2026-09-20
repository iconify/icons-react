import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsz0_wapm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsz0_wapm"/>`,
		"fallback": "mdi:invoice-check-outline",
	});
}

export default Component;
