import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4n_5lbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4n_5lbrs"/>`,
		"fallback": "mdi:stairs-up",
	});
}

export default Component;
