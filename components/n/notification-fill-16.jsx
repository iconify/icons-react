import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvtop3b3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvtop3b3e"/>`,
		"fallback": "garden:notification-fill-16",
	});
}

export default Component;
