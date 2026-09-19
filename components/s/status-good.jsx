import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjq3pxauu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjq3pxauu"/>`,
		"fallback": "grommet-icons:status-good",
	});
}

export default Component;
