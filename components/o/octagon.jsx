import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfa6agb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfa6agb6p"/>`,
		"fallback": "iconoir:octagon",
	});
}

export default Component;
