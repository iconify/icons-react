import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m396akb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m396akb3t"/>`,
		"fallback": "ri:reset-right-fill",
	});
}

export default Component;
