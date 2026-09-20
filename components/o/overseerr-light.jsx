import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar1p11b4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar1p11b4n"/>`,
		"fallback": "selfhst:overseerr-light",
	});
}

export default Component;
