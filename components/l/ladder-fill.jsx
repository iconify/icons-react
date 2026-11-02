import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn7_0n8ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn7_0n8ej"/>`,
		"fallback": "mingcute:ladder-fill",
	});
}

export default Component;
