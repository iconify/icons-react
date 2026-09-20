import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy7pxvbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy7pxvbgg"/>`,
		"fallback": "tabler:sort-ascending-2",
	});
}

export default Component;
