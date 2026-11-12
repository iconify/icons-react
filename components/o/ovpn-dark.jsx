import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae56v0u4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae56v0u4p"/>`,
		"fallback": "selfhst:ovpn-dark",
	});
}

export default Component;
