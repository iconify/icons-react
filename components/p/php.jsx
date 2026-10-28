import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl88kwb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl88kwb7m"/>`,
		"fallback": "cbi:php",
	});
}

export default Component;
