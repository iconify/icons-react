import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0nzbp1zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0nzbp1zq"/>`,
		"fallback": "mdi:key-outline",
	});
}

export default Component;
