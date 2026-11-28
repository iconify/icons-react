import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p28jsbc8m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p28jsbc8m"/>`,
		"fallback": "pullo:restroom",
	});
}

export default Component;
