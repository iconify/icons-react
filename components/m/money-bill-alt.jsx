import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px5xjv6ok.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px5xjv6ok"/>`,
		"fallback": "la:money-bill-alt",
	});
}

export default Component;
