import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twp1bxbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twp1bxbyz"/>`,
		"fallback": "thesvg:unsplash",
	});
}

export default Component;
