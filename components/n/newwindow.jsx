import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtmml6b4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtmml6b4e"/>`,
		"fallback": "raphael:newwindow",
	});
}

export default Component;
