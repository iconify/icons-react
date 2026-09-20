import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnj14oqzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnj14oqzh"/>`,
		"fallback": "mdi:wb-auto",
	});
}

export default Component;
