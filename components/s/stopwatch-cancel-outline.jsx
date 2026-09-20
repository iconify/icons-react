import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpb4fc6gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpb4fc6gq"/>`,
		"fallback": "mdi:stopwatch-cancel-outline",
	});
}

export default Component;
