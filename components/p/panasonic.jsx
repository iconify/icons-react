import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luz-11bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luz-11bho"/>`,
		"fallback": "thesvg-color:panasonic",
	});
}

export default Component;
