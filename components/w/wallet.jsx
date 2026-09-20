import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvrc8ibbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvrc8ibbs"/>`,
		"fallback": "keyline-icons:wallet",
	});
}

export default Component;
