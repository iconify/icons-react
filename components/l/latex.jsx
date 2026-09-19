import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewat9cc6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewat9cc6z"/>`,
		"fallback": "file-icons:latex",
	});
}

export default Component;
