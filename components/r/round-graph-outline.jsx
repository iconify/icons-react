import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0sedyn1y.css';
import '../../css/x/x0zzi0bor.css';
import '../../css/n/nh75w0b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0sedyn1y"/><path class="x0zzi0bor"/><path class="nh75w0b0t"/>`,
		"fallback": "solar:round-graph-outline",
	});
}

export default Component;
