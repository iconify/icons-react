import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx4-b78rd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx4-b78rd"/>`,
		"fallback": "fa6-solid:paper-plane",
	});
}

export default Component;
