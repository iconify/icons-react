import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv390hq8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv390hq8i"/>`,
		"fallback": "selfhst:rahoot",
	});
}

export default Component;
