import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo7lrcqop.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo7lrcqop"/>`,
		"fallback": "fa6-solid:mask-face",
	});
}

export default Component;
