import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-s0w9hal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-s0w9hal"/>`,
		"fallback": "fa-solid:plus-circle",
	});
}

export default Component;
