import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5-obmb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5-obmb1d"/>`,
		"fallback": "mdi:timer-off",
	});
}

export default Component;
