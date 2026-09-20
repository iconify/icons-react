import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkqw-6hkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkqw-6hkt"/>`,
		"fallback": "selfhst:unimus-light",
	});
}

export default Component;
