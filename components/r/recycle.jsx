import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph_x37bia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph_x37bia"/>`,
		"fallback": "fa6-solid:recycle",
	});
}

export default Component;
