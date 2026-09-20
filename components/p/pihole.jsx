import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiyy8_k4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiyy8_k4k"/>`,
		"fallback": "simple-icons:pihole",
	});
}

export default Component;
