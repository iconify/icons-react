import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xrby5qbhn.css';
import '../../css/x/xas7j-b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xrby5qbhn"/><path class="xas7j-b1p"/></g>`,
		"fallback": "tdesign:key",
	});
}

export default Component;
