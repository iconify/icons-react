import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samu3ccav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="samu3ccav"/>`,
		"fallback": "mdi:letter-x-circle-outline",
	});
}

export default Component;
