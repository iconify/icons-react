import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j76u6_b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j76u6_b3z primary"/>`,
		"fallback": "iconaut:speech-to-text-duotone",
	});
}

export default Component;
