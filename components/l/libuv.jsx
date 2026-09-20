import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi4my1vub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi4my1vub"/>`,
		"fallback": "thesvg-color:libuv",
	});
}

export default Component;
