import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uogs-ibsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uogs-ibsb"/>`,
		"fallback": "uil:laptop-cloud",
	});
}

export default Component;
