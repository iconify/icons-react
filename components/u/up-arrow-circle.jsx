import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg82e8b1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg82e8b1c"/>`,
		"fallback": "ps:up-arrow-circle",
	});
}

export default Component;
