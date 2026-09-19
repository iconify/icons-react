import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7p34wbvc.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7p34wbvc"/>`,
		"fallback": "whh:linkedin",
	});
}

export default Component;
