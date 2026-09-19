import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og-oztl2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og-oztl2v"/>`,
		"fallback": "fa-brands:reddit-alien",
	});
}

export default Component;
