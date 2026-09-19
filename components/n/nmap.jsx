import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce4z0nbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce4z0nbua"/>`,
		"fallback": "file-icons:nmap",
	});
}

export default Component;
