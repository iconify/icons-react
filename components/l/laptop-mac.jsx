import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9qqa1tma.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9qqa1tma"/>`,
		"fallback": "zmdi:laptop-mac",
	});
}

export default Component;
