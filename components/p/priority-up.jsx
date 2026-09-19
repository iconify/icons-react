import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az1q_bbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az1q_bbfp"/>`,
		"fallback": "iconoir:priority-up",
	});
}

export default Component;
