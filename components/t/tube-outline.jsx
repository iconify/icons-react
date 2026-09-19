import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp5c0ubxx.css';
import '../../css/h/h5e9s-b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yp5c0ubxx"/><path clip-rule="evenodd" class="h5e9s-b1t"/>`,
		"fallback": "cuida:tube-outline",
	});
}

export default Component;
