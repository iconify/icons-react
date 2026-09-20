import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylh5eo05u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylh5eo05u"/>`,
		"fallback": "thesvg-color:piaggio-group",
	});
}

export default Component;
