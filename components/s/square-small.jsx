import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfa-k33er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfa-k33er"/>`,
		"fallback": "mdi:square-small",
	});
}

export default Component;
