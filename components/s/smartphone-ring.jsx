import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv9mw16ld.css';

const viewBox = {"width":432,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv9mw16ld"/>`,
		"fallback": "zmdi:smartphone-ring",
	});
}

export default Component;
