import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkd-rr4pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkd-rr4pt"/>`,
		"fallback": "keyline-icons:plane-takeoff",
	});
}

export default Component;
