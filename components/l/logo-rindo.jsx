import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edg0qh-xn.css';
import '../../css/a/am03yhn7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edg0qh-xn"/><path class="am03yhn7c"/>`,
		"fallback": "famicons:logo-rindo",
	});
}

export default Component;
