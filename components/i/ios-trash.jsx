import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orc8djbsy.css';
import '../../css/s/s5lw05brm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orc8djbsy"/><path class="s5lw05brm"/>`,
		"fallback": "ion:ios-trash",
	});
}

export default Component;
