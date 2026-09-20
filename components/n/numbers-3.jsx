import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w59t3iw6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w59t3iw6h"/>`,
		"fallback": "tdesign:numbers-3",
	});
}

export default Component;
