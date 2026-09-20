import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y79b0gbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y79b0gbxi"/>`,
		"fallback": "mdi:lipstick",
	});
}

export default Component;
