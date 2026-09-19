import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwxs6d3ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwxs6d3ky"/>`,
		"fallback": "iconamoon:screen-full-thin",
	});
}

export default Component;
