import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb16ibc-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb16ibc-h"/>`,
		"fallback": "selfhst:mozilla-vpn-light",
	});
}

export default Component;
