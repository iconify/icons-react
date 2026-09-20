import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7np0z8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph7np0z8z"/>`,
		"fallback": "selfhst:temps-light",
	});
}

export default Component;
