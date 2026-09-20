import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uojy9gomk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uojy9gomk"/>`,
		"fallback": "mdi:invoice-text-send-outline",
	});
}

export default Component;
