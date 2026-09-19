import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj1u2fbvd.css';

const viewBox = {"width":424,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj1u2fbvd"/>`,
		"fallback": "zmdi:sort-by-alpha",
	});
}

export default Component;
