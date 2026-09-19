import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxtpq1b2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxtpq1b2e"/>`,
		"fallback": "cib:nintendo",
	});
}

export default Component;
