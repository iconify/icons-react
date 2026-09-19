import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pch346b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pch346b8d"/>`,
		"fallback": "eva:star-outline",
	});
}

export default Component;
