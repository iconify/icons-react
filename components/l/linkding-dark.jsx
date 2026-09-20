import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqs7bev6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqs7bev6u"/>`,
		"fallback": "selfhst:linkding-dark",
	});
}

export default Component;
