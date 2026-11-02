import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eya_1n8bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eya_1n8bo"/>`,
		"fallback": "mingcute:mind-map-line",
	});
}

export default Component;
