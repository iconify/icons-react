import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh22k8bct.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh22k8bct"/>`,
		"fallback": "zmdi:view-list",
	});
}

export default Component;
