import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s06ydqbtb.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s06ydqbtb"/>`,
		"fallback": "zmdi:panorama-horizontal",
	});
}

export default Component;
