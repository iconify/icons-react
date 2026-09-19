import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njtq08kwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njtq08kwh"/>`,
		"fallback": "fa6-solid:ruler",
	});
}

export default Component;
