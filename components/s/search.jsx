import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfj2ffzpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfj2ffzpp"/>`,
		"fallback": "subway:search",
	});
}

export default Component;
