import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqhs8d5-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqhs8d5-l"/>`,
		"fallback": "mdi:view-array-outline",
	});
}

export default Component;
