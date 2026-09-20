import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5yd5ixf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv5yd5ixf"/>`,
		"fallback": "mdi:pinwheel",
	});
}

export default Component;
