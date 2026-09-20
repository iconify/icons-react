import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh1_5c8zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh1_5c8zi"/>`,
		"fallback": "ri:volume-down-line",
	});
}

export default Component;
