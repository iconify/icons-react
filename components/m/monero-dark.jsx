import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3yz9_bjz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3yz9_bjz"/>`,
		"fallback": "selfhst:monero-dark",
	});
}

export default Component;
