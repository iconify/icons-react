import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz1dhdcvv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz1dhdcvv"/>`,
		"fallback": "roentgen:shield-volcano-smoke",
	});
}

export default Component;
