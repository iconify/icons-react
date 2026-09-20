import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-r3bw6mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-r3bw6mp"/>`,
		"fallback": "mdi:muslim",
	});
}

export default Component;
