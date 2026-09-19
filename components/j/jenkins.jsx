import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj7j4ybat.css';

const viewBox = {"width":383,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj7j4ybat"/>`,
		"fallback": "file-icons:jenkins",
	});
}

export default Component;
