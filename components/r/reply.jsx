import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxotj33ea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxotj33ea"/>`,
		"fallback": "subway:reply",
	});
}

export default Component;
