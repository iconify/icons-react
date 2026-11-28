import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q32m6k_1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q32m6k_1e"/>`,
		"fallback": "noviair-light:milk",
	});
}

export default Component;
