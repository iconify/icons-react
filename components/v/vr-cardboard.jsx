import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf8zvibwh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf8zvibwh"/>`,
		"fallback": "fa6-solid:vr-cardboard",
	});
}

export default Component;
