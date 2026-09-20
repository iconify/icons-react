import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy6kykofr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy6kykofr"/>`,
		"fallback": "streamline-ultimate:medical-instrument-walking-aid-bold",
	});
}

export default Component;
