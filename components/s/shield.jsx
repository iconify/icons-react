import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg8kaubnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg8kaubnh"/>`,
		"fallback": "keyline-icons:shield",
	});
}

export default Component;
