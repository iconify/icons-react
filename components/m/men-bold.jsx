import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-7x2opnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-7x2opnv"/>`,
		"fallback": "solar:men-bold",
	});
}

export default Component;
