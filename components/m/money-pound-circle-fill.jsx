import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0ogmnb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0ogmnb8k"/>`,
		"fallback": "ri:money-pound-circle-fill",
	});
}

export default Component;
