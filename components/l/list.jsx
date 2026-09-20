import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hugmht60u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hugmht60u"/>`,
		"fallback": "ix:list",
	});
}

export default Component;
