import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er6f_gbdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er6f_gbdr"/>`,
		"fallback": "selfhst:optistack-light",
	});
}

export default Component;
