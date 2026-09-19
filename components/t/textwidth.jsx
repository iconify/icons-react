import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7fz2tp4w.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7fz2tp4w"/>`,
		"fallback": "whh:textwidth",
	});
}

export default Component;
