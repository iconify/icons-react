import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le-9h2bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le-9h2bck"/>`,
		"fallback": "mdi:tooltip-image",
	});
}

export default Component;
