import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqxt5gmua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqxt5gmua"/>`,
		"fallback": "mingcute:right-small-line",
	});
}

export default Component;
