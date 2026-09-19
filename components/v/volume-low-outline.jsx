import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsh4_td-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsh4_td-z"/>`,
		"fallback": "famicons:volume-low-outline",
	});
}

export default Component;
