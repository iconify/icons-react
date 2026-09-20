import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1b9w0esc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1b9w0esc"/>`,
		"fallback": "mdi:music-circle-outline",
	});
}

export default Component;
