import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl5iabln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcl5iabln"/>`,
		"fallback": "pixelarticons:volume-3",
	});
}

export default Component;
