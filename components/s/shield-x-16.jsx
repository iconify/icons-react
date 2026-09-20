import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf80xcb_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf80xcb_m"/>`,
		"fallback": "octicon:shield-x-16",
	});
}

export default Component;
