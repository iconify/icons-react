import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy7uj0bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iy7uj0bjn"/>`,
		"fallback": "keyline-icons:square-bar-chart-horizontal-end-fill",
	});
}

export default Component;
