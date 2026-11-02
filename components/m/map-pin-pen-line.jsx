import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyqm8vbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyqm8vbpo"/>`,
		"fallback": "mingcute:map-pin-pen-line",
	});
}

export default Component;
