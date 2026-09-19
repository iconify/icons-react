import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voj5jfbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voj5jfbvp"/>`,
		"fallback": "bxs:right-top-arrow-circle",
	});
}

export default Component;
