import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-9x3oqjr.css';

const viewBox = {"width":424,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-9x3oqjr"/>`,
		"fallback": "zmdi:sort-desc",
	});
}

export default Component;
