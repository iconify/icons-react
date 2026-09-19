import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzngxbbwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzngxbbwa"/>`,
		"fallback": "ion:ios-snowy",
	});
}

export default Component;
