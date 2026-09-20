import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgimn7bxc.css';
import '../../css/t/t0u4brujn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgimn7bxc"/><path class="t0u4brujn"/>`,
		"fallback": "selfhst:lunar",
	});
}

export default Component;
