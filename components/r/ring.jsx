import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx2m1lh8l.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx2m1lh8l"/>`,
		"fallback": "whh:ring",
	});
}

export default Component;
