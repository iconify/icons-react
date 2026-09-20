import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2bt4rt7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2bt4rt7h"/>`,
		"fallback": "ri:numbers-fill",
	});
}

export default Component;
