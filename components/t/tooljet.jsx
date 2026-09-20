import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph0f_bbkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph0f_bbkn"/>`,
		"fallback": "selfhst:tooljet",
	});
}

export default Component;
