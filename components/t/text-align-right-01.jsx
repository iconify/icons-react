import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpjdfxbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpjdfxbzr"/>`,
		"fallback": "hugeicons:text-align-right-01",
	});
}

export default Component;
