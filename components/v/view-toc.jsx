import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px6thzdhd.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px6thzdhd"/>`,
		"fallback": "zmdi:view-toc",
	});
}

export default Component;
