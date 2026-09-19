import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0sy06a9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0sy06a9l"/>`,
		"fallback": "griddy-icons:twitch-filled",
	});
}

export default Component;
