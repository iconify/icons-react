import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrk2f8-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylrk2f8-u"/>`,
		"fallback": "uil:underline",
	});
}

export default Component;
