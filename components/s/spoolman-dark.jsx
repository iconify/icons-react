import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whl_7lbev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whl_7lbev"/>`,
		"fallback": "selfhst:spoolman-dark",
	});
}

export default Component;
