import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5xwm82e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5xwm82e"/>`,
		"fallback": "mdi:store-search-outline",
	});
}

export default Component;
