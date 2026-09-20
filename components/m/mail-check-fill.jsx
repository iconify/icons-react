import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v16u2yk6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v16u2yk6e"/>`,
		"fallback": "ri:mail-check-fill",
	});
}

export default Component;
