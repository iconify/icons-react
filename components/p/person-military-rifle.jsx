import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubjs-yb_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubjs-yb_j"/>`,
		"fallback": "fa6-solid:person-military-rifle",
	});
}

export default Component;
