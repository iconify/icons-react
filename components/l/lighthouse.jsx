import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvtfu18_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvtfu18_u"/>`,
		"fallback": "file-icons:lighthouse",
	});
}

export default Component;
