import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiv-uob8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiv-uob8s"/>`,
		"fallback": "selfhst:karakeep-dark",
	});
}

export default Component;
