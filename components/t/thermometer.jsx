import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt4i1t6ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt4i1t6ih"/>`,
		"fallback": "tabler:thermometer",
	});
}

export default Component;
