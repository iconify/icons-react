import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv0qo_yvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv0qo_yvm"/>`,
		"fallback": "mdi:tooltip-check",
	});
}

export default Component;
