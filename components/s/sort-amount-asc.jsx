import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqd5hab-o.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqd5hab-o"/>`,
		"fallback": "zmdi:sort-amount-asc",
	});
}

export default Component;
