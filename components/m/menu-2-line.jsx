import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7dhy-buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7dhy-buu"/>`,
		"fallback": "ri:menu-2-line",
	});
}

export default Component;
