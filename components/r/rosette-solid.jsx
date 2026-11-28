import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh_mdjk1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh_mdjk1q"/>`,
		"fallback": "iconaut:rosette-solid",
	});
}

export default Component;
