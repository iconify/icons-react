import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne3bmkbmr.css';
import '../../css/j/jjdolp14t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne3bmkbmr"/><path class="jjdolp14t"/>`,
		"fallback": "selfhst:rsshub-light",
	});
}

export default Component;
