import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvm9wbbqr.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvm9wbbqr"/>`,
		"fallback": "zmdi:panorama-vertical",
	});
}

export default Component;
