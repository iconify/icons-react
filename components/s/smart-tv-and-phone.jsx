import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-xcb-l_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-xcb-l_n"/>`,
		"fallback": "streamline-ultimate:smart-tv-and-phone",
	});
}

export default Component;
