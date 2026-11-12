import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i--9t9r5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i--9t9r5m"/>`,
		"fallback": "selfhst:linkwarden-light",
	});
}

export default Component;
