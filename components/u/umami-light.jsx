import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr1gj811x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr1gj811x"/>`,
		"fallback": "selfhst:umami-light",
	});
}

export default Component;
