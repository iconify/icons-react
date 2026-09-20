import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umx9k2iuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umx9k2iuy"/>`,
		"fallback": "majesticons:map-marker-plus-line",
	});
}

export default Component;
