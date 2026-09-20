import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-eb3jg9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-eb3jg9l"/>`,
		"fallback": "thesvg-color:lg",
	});
}

export default Component;
