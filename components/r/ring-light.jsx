import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5b2u6byf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5b2u6byf"/>`,
		"fallback": "selfhst:ring-light",
	});
}

export default Component;
