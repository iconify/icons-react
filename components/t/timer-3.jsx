import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awwgdy2er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awwgdy2er"/>`,
		"fallback": "mdi:timer-3",
	});
}

export default Component;
