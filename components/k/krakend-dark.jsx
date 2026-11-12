import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnc1qr3ko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnc1qr3ko"/>`,
		"fallback": "selfhst:krakend-dark",
	});
}

export default Component;
