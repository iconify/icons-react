import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxmzs5b3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxmzs5b3c"/>`,
		"fallback": "selfhst:ironmount-dark",
	});
}

export default Component;
