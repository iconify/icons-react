import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq0b-nbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq0b-nbsf"/>`,
		"fallback": "mdi:volume-medium",
	});
}

export default Component;
