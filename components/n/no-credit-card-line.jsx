import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke7pn4bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke7pn4bgq"/>`,
		"fallback": "ri:no-credit-card-line",
	});
}

export default Component;
