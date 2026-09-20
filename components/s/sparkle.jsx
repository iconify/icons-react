import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haetg-w3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haetg-w3z"/>`,
		"fallback": "meteor-icons:sparkle",
	});
}

export default Component;
