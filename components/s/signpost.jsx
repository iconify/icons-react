import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5aftz4sw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5aftz4sw"/>`,
		"fallback": "oi:signpost",
	});
}

export default Component;
