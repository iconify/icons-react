import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjlt7px2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjlt7px2b"/>`,
		"fallback": "mingcute:twitch-fill",
	});
}

export default Component;
