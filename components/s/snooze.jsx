import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4zj8ukpc.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4zj8ukpc"/>`,
		"fallback": "whh:snooze",
	});
}

export default Component;
