import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5zi9c24n.css';
import '../../css/j/ji_uifbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5zi9c24n"/><path class="ji_uifbjo"/>`,
		"fallback": "circum:location-on",
	});
}

export default Component;
