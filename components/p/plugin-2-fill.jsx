import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lytj4i0za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lytj4i0za"/>`,
		"fallback": "mingcute:plugin-2-fill",
	});
}

export default Component;
