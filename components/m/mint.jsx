import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8echs6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8echs6u"/>`,
		"fallback": "file-icons:mint",
	});
}

export default Component;
