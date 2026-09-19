import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2d2h3csf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2d2h3csf"/>`,
		"fallback": "fa6-solid:pallet",
	});
}

export default Component;
