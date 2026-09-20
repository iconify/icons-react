import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lluzz6bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lluzz6bir"/>`,
		"fallback": "mdi:letter-m-circle",
	});
}

export default Component;
