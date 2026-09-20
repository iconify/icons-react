import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7owgib4r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7owgib4r"/>`,
		"fallback": "pajamas:trend-down",
	});
}

export default Component;
