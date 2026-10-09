import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpzke5o9l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpzke5o9l"/>`,
		"fallback": "energy-icons:navigation-20-bold",
	});
}

export default Component;
