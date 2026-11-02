import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhz_pd5hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhz_pd5hu"/>`,
		"fallback": "mingcute:list-chevrons-down-up-fill",
	});
}

export default Component;
