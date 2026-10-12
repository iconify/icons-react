import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvl7hibfh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvl7hibfh"/>`,
		"fallback": "energy-icons:message-square-20-bold",
	});
}

export default Component;
