import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo8zr4c7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo8zr4c7m"/>`,
		"fallback": "mingcute:ubuntu-line",
	});
}

export default Component;
