import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkv6y8nxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkv6y8nxx"/>`,
		"fallback": "selfhst:review-board-light",
	});
}

export default Component;
