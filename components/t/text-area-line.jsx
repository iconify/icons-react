import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqu52_xpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqu52_xpu"/>`,
		"fallback": "mingcute:text-area-line",
	});
}

export default Component;
