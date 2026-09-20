import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od2b1-boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="od2b1-boe"/>`,
		"fallback": "majesticons:sim-card",
	});
}

export default Component;
