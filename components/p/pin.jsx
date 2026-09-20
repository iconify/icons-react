import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy9znjbbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy9znjbbl"/>`,
		"fallback": "subway:pin",
	});
}

export default Component;
