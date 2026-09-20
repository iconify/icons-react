import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amd_3bbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amd_3bbix"/>`,
		"fallback": "ri:timer-flash-fill",
	});
}

export default Component;
