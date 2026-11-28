import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne-g5_z5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne-g5_z5e"/>`,
		"fallback": "iconaut:volume-knob-solid",
	});
}

export default Component;
