import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk9qaabaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk9qaabaw"/>`,
		"fallback": "thesvg-color:tele-5",
	});
}

export default Component;
