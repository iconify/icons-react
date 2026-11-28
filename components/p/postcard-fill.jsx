import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w94ft6b1d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w94ft6b1d"/>`,
		"fallback": "pullo:postcard-fill",
	});
}

export default Component;
