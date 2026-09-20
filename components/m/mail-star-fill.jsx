import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke1i97i9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke1i97i9e"/>`,
		"fallback": "ri:mail-star-fill",
	});
}

export default Component;
