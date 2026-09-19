import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubh0g-bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubh0g-bri"/>`,
		"fallback": "iconoir:light-bulb-off",
	});
}

export default Component;
