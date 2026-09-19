import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5_521b0r.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5_521b0r"/>`,
		"fallback": "whh:report",
	});
}

export default Component;
