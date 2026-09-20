import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5l_xac5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5l_xac5z"/>`,
		"fallback": "thesvg:spond",
	});
}

export default Component;
