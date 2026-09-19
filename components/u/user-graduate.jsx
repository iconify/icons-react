import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmfou0x8m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmfou0x8m"/>`,
		"fallback": "fa6-solid:user-graduate",
	});
}

export default Component;
