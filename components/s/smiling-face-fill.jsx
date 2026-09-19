import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omcviu_cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omcviu_cr"/>`,
		"fallback": "eva:smiling-face-fill",
	});
}

export default Component;
