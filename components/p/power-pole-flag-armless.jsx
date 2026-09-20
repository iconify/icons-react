import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgj3sr5dm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgj3sr5dm"/>`,
		"fallback": "roentgen:power-pole-flag-armless",
	});
}

export default Component;
