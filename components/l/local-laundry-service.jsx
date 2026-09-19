import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buhwby_ug.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buhwby_ug"/>`,
		"fallback": "zmdi:local-laundry-service",
	});
}

export default Component;
