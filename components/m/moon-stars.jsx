import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd03i40nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd03i40nu"/>`,
		"fallback": "pixelarticons:moon-stars",
	});
}

export default Component;
