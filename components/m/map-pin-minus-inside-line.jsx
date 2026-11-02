import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_ej_g2mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_ej_g2mk"/>`,
		"fallback": "mingcute:map-pin-minus-inside-line",
	});
}

export default Component;
