import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs6905b6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs6905b6e"/>`,
		"fallback": "file-icons:kx",
	});
}

export default Component;
