import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep8a0-bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep8a0-bfk"/>`,
		"fallback": "noviair:ticket-plus",
	});
}

export default Component;
