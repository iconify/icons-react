import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu3ov0u1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu3ov0u1o"/>`,
		"fallback": "mdi:view-dashboard-edit-outline",
	});
}

export default Component;
