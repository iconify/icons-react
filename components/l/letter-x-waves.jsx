import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acut2rbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acut2rbzo"/>`,
		"fallback": "mynaui:letter-x-waves",
	});
}

export default Component;
