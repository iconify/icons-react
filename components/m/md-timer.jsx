import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj37qhm-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj37qhm-h"/>`,
		"fallback": "ion:md-timer",
	});
}

export default Component;
