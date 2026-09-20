import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2h16x32u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2h16x32u"/>`,
		"fallback": "thesvg-color:socket",
	});
}

export default Component;
