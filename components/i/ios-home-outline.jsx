import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmbmz2bey.css';
import '../../css/h/h4npctbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmbmz2bey"/><path class="h4npctbsb"/>`,
		"fallback": "ion:ios-home-outline",
	});
}

export default Component;
