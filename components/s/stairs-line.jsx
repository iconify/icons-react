import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrq970bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrq970bog"/>`,
		"fallback": "ri:stairs-line",
	});
}

export default Component;
