import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z95yftb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z95yftb4k"/>`,
		"fallback": "file-icons:krl",
	});
}

export default Component;
