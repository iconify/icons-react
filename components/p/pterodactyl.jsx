import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vab42o9le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vab42o9le"/>`,
		"fallback": "thesvg-color:pterodactyl",
	});
}

export default Component;
