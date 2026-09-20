import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg8d1vmug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg8d1vmug"/>`,
		"fallback": "ri:parentheses-line",
	});
}

export default Component;
