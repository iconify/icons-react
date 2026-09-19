import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa_28r6oi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa_28r6oi"/>`,
		"fallback": "ion:move",
	});
}

export default Component;
