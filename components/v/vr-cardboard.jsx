import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj3vvdbyh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj3vvdbyh"/>`,
		"fallback": "fa-solid:vr-cardboard",
	});
}

export default Component;
