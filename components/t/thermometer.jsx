import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmz8bn8eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmz8bn8eq"/>`,
		"fallback": "boxicons:thermometer",
	});
}

export default Component;
