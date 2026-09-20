import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uup_hebcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uup_hebcc"/>`,
		"fallback": "mdi:tooltip-image-outline",
	});
}

export default Component;
