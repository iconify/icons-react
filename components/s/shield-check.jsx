import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks26x0d-r.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks26x0d-r"/>`,
		"fallback": "zmdi:shield-check",
	});
}

export default Component;
