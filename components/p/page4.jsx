import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laa4fbevb.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laa4fbevb"/>`,
		"fallback": "fa6-brands:page4",
	});
}

export default Component;
