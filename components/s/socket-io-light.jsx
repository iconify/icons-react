import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fej4g_csw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fej4g_csw"/>`,
		"fallback": "selfhst:socket-io-light",
	});
}

export default Component;
