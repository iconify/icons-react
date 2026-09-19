import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9d5777lb.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9d5777lb"/>`,
		"fallback": "whh:notificationbottom",
	});
}

export default Component;
