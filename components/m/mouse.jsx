import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie0u-y0-r.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie0u-y0-r"/>`,
		"fallback": "zmdi:mouse",
	});
}

export default Component;
