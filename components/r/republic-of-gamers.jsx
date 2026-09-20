import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebzgtqz9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebzgtqz9h"/>`,
		"fallback": "thesvg-color:republic-of-gamers",
	});
}

export default Component;
