import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxz7wfb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxz7wfb8l"/>`,
		"fallback": "mdi:silo",
	});
}

export default Component;
