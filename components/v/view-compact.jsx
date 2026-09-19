import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i301vq99h.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i301vq99h"/>`,
		"fallback": "zmdi:view-compact",
	});
}

export default Component;
