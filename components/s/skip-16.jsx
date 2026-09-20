import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvc7fdb5n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvc7fdb5n"/>`,
		"fallback": "octicon:skip-16",
	});
}

export default Component;
