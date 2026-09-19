import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4nlppewx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4nlppewx"/>`,
		"fallback": "fa6-solid:truck-plane",
	});
}

export default Component;
