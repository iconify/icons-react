import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t88x78b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t88x78b3r"/>`,
		"fallback": "mdi:step-forward",
	});
}

export default Component;
