import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojp61_uzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojp61_uzl"/>`,
		"fallback": "mingcute:search-none-fill",
	});
}

export default Component;
